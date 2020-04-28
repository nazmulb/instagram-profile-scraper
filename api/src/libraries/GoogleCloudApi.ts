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

    const returnData: GoogleCloud.BrandAndInterests = {
      brands: new Map<string, number>(),
      interests: new Map<string, number>(),
    };

    try {
      const result: GoogleCloud.ResponseBody = await this.annotateText(
        requestBody,
      );
      const entities: GoogleCloud.Entity[] = result.entities;
      const categories: GoogleCloud.ClassificationCategory[] =
        result.categories;

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
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_GATEWAY,
          error: e,
        },
        HttpStatus.BAD_GATEWAY,
      );
    }

    return returnData;
  }

  /**
   * Get all texts from images
   * @param {string[]} images - content text
   * @returns {Promise<string>}
   */
  static async getTextFromImages(images: string[]): Promise<string> {
    let returnData: string = '';
    const requests = [];

    images.map((img, i) => {
      if (img) {
        requests[i] = {
          image: {
            source: {
              imageUri: img,
            },
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        };
      }
    });

    const requestBody: GoogleCloud.VisionRequestBody = {
      requests,
    };

    try {
      const result: GoogleCloud.VisionResponseBody = await this.annotateImages(
        requestBody,
      );

      // console.dir(result);
      const entities: GoogleCloud.AnnotateImageResponse[] = result.responses;
      // console.dir(result.responses);

      entities.forEach(entity => {
        returnData += entity.fullTextAnnotation
          ? entity.fullTextAnnotation.text
          : '';
      });
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_GATEWAY,
          error: e,
        },
        HttpStatus.BAD_GATEWAY,
      );
    }

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
