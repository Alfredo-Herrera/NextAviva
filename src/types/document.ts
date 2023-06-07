export type Metadata = {
  key: string;
  value: string;
};

export interface NewDocument {
  content: Blob | File;
  contentType: string;
  extension: string;
  description: string;
  categoryId: string;
  metadata: {};
}

export interface ResponseDocument {
  id: string;
  contentType?: string;
  description?: string;
  fileName?: string;
  size?: string;
  url?: string;
  categoryModel?: Category;
  metadata?: {};
}

export interface Category {
  id: string;
  categoryName: string;
  parentCategoryId: string;
}

export interface DocumentOCR {
  documentId: string;
  details: DocumentOCRDetail[];
}

export interface DocumentOCRDetail {
  id?: string;
  fieldName?: string;
  value?: string;
  certainly?: number;
}

export interface DataOcrForm {
  firstLastName?: string;
  secondLastName?: string;
  name?: string;
  parsedAddress?: string;
  street?: string;
  insideNumber?: string;
  outdoorNumber?: string;
  suburb?: string;
  city?: string;
  municipality?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  CURP?: string;
}

export type RowDocumentProps = {
  id: string;
  name: string;
  description?: string;
  url: string;
  urlCoverImage?: string;
  size: string;
  date: Date;
  documentType: 'Image' | 'Video';
  recordingCall: boolean;
};
