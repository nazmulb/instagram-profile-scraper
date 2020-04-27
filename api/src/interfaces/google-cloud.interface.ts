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
