import React from 'react';
import { MetafieldType } from '../../../types';
type DocumentHeroProps = {
    disableImage?: boolean;
    resource: any;
    actions?: React.ReactNode;
    metafields?: MetafieldType[];
};
declare const DocumentDetails: React.FC<DocumentHeroProps>;
export default DocumentDetails;
