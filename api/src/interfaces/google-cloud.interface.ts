export interface Document {
  type?: string;
  language?: string;
  content?: string;
  gcsContentUri?: string;
}

export interface Features {
  extractSyntax?: boolean;
  extractEntities?: boolean;
  extractDocumentSentiment?: boolean;
  extractEntitySentiment?: boolean;
  classifyText?: boolean;
}

export interface RequestBody {
  document?: Document;
  features?: Features;
  encodingType?: string;
}

export interface Sentiment {
  magnitude?: number;
  score?: number;
}

export interface Entity {
  name?: string;
  type?: string;
  metadata?: object;
  salience?: number;
  mentions?: object[];
  sentiment?: Sentiment;
}

export interface ClassificationCategory {
  name?: string;
  confidence?: number;
}

export interface ResponseBody {
  sentences?: object[];
  tokens?: object[];
  entities?: Entity[];
  documentSentiment?: object;
  language?: string;
  categories?: ClassificationCategory[];
}

export interface BrandAndInterests {
  brands?: Map<string, number>;
  interests?: Map<string, number>;
}

export interface Feature {
  type?: string;
  maxResults?: number;
  model?: string;
}

export interface ImageSource {
  gcsImageUri?: string;
  imageUri?: string;
}

export interface Image {
  content?: string;
  source?: ImageSource;
}

export interface AnnotateImageRequest {
  image?: Image;
  features?: Feature[];
  imageContext?: object;
}

export interface VisionRequestBody {
  requests?: AnnotateImageRequest[];
  parent?: string;
}

export interface TextAnnotation {
  pages?: object[];
  text?: string;
}

export interface AnnotateImageResponse {
  textAnnotations?: object[];
  fullTextAnnotation?: TextAnnotation;
  error?: object;
  context?: object;
}

export interface VisionResponseBody {
  responses?: AnnotateImageResponse[];
}
