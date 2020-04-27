import { HttpException, HttpStatus } from '@nestjs/common';
import axios from '../axios';
import { GoogleCloud } from '../interfaces';

export class GoogleCloudApi {
  /**
   * Get Brand Affinity and Interests
   * @param {content} content - content text
   * @returns {Promise<object>}
   */
  static async getBrandAffinityAndInterests(content: string): Promise<object> {
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

    // console.dir(entities);
    // console.dir(categories);

    const returnData = {
      brands: new Map<string, number>(),
      interests: new Map<string, number>(),
    };

    // console.log('Entities and sentiments:');
    entities.forEach(entity => {
      if (entity.type === 'ORGANIZATION') {
        returnData.brands.set(entity.name, entity.sentiment.score * 100);
        /*console.log(`Name: ${entity.name}`);
        console.log(
          `Score: ${entity.sentiment.score}, Ratio: ${entity.sentiment.score *
            100}%`,
        );*/
      }
    });

    // console.log('Text Classification:');
    categories.forEach(category => {
      returnData.interests.set(category.name, category.confidence * 100);
      /*console.log(
        `Name: ${category.name}, Confidence: ${
          category.confidence
        }, Ratio: ${category.confidence * 100}%`,
      );*/
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
        `https://language.googleapis.com/v1beta2/documents:annotateText?key=${process.env.API_KEY_GCP}`,
        requestBody,
      )
      .then(res => res.data)
      .catch(e => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_GATEWAY,
            error: e.response.error,
          },
          HttpStatus.BAD_GATEWAY,
        );
      });
  }
}
