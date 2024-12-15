import React from 'react';
import { CollectionDocumentsProps } from '../../components/cms/collection-documents/CollectionDocuments';
import { SectionProps, HeadingProps } from '../../types';
type CmsCollectionDocumentsProps = CollectionDocumentsProps & SectionProps & HeadingProps;
declare const ShopCollectionProducts: React.FC<CmsCollectionDocumentsProps>;
export default ShopCollectionProducts;
