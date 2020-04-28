import { HttpException, HttpStatus } from '@nestjs/common';
import axios from '../axios';
import { GoogleCloud } from '../interfaces';

export class GoogleCloudApi {
  public static apiLanURL: string = 'https://language.googleapis.com/v1beta2';
  public static apiVisionURL: string =
    'https://vision.googleapis.com/v1p4beta1';

  /**
   * Get Brand Affinity and Interests
   * @param {string} content - content text
   * @returns {Promise<GoogleCloud.BrandAndInterests>}
   */
  static async getBrandAffinityAndInterests(
    content: string,
  ): Promise<GoogleCloud.BrandAndInterests> {
    const requestBody: GoogleCloud.RequestBody = {
      document: {
        type: 'PLAIN_TEXT',
        language: 'EN',
        content,
      },
      features: {
        extractSyntax: false,
        extractEntities: true,
        extractDocumentSentiment: false,
        extractEntitySentiment: true,
        classifyText: true,
      },
      encodingType: 'UTF8',
    };

    const result: GoogleCloud.ResponseBody = await this.annotateText(
      requestBody,
    );
    const entities: GoogleCloud.Entity[] = result.entities;
    const categories: GoogleCloud.ClassificationCategory[] = result.categories;

    const returnData: GoogleCloud.BrandAndInterests = {
      brands: new Map<string, number>(),
      interests: new Map<string, number>(),
    };

    entities.forEach(entity => {
      if (entity.type === 'ORGANIZATION' && entity.sentiment.score >= 0) {
        returnData.brands.set(entity.name, entity.sentiment.score * 100);
      }
    });

    categories.forEach(category => {
      if (category.confidence >= 0) {
        returnData.interests.set(category.name, category.confidence * 100);
      }
    });

    return returnData;
  }

  /**
   * Get all texts from images
   * @param {string[]} images - content text
   * @returns {Promise<string>}
   */
  static async getTextFromImages(images: string[]): Promise<string> {
    // console.dir(images);
    const requestBody: GoogleCloud.VisionRequestBody = {
      requests: [
        {
          image: {
            source: {
              imageUri:
                'https://instagram.ftll1-1.fna.fbcdn.net/v/t51.2885-15/e15/95096399_718187358925964_4269722698754055905_n.jpg?_nc_ht=instagram.ftll1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wL7OeXZHnLMAX-b-DpZ&oh=b6df7ee01dbcf390af64505159bf4add&oe=5EA977F1',
            },
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
        {
          image: {
            source: {
              imageUri:
                'https://instagram.ftll1-1.fna.fbcdn.net/v/t51.2885-15/e35/95008798_1952679888199593_7408566697593559042_n.jpg?_nc_ht=instagram.ftll1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Fq4xWEEzFTMAX8V12CN&oh=e629a11f58309bcc0ea4b41c85ae6d9f&oe=5EA9E51D',
            },
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    };

    const result: GoogleCloud.VisionResponseBody = await this.annotateImages(
      requestBody,
    );

    // console.dir(result);
    const entities: GoogleCloud.AnnotateImageResponse[] = result.responses;
    // console.dir(result.responses);

    let returnData: string = '';

    entities.forEach(entity => {
      returnData += entity.fullTextAnnotation.text;
    });

    return returnData;
  }

  /**
   * To analyse the text using Google NLP service
   * @param {GoogleCloud.RequestBody} requestBody - request body
   * @returns {Promise<any>}
   */
  static async annotateText(
    requestBody: GoogleCloud.RequestBody,
  ): Promise<any> {
    return axios
      .post(
        `${GoogleCloudApi.apiLanURL}/documents:annotateText?key=${process.env.API_KEY_GCP}`,
        requestBody,
      )
      .then(res => res.data)
      .catch(e => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_GATEWAY,
            error: e,
          },
          HttpStatus.BAD_GATEWAY,
        );
      });
  }

  /**
   * To run image detection and annotation for a batch of images.
   * @param {GoogleCloud.VisionRequestBody} VisionRequestBody - vision request body
   * @returns {Promise<any>}
   */
  static async annotateImages(
    requestBody: GoogleCloud.VisionRequestBody,
  ): Promise<any> {
    return axios
      .post(
        `${GoogleCloudApi.apiVisionURL}/images:annotate?key=${process.env.API_KEY_GCP}`,
        requestBody,
      )
      .then(res => res.data)
      .catch(e => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_GATEWAY,
            error: e,
          },
          HttpStatus.BAD_GATEWAY,
        );
      });
  }
}
