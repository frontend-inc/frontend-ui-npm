import React from 'react';
import { DocumentType } from '../../../types';
type ShowProps = {
    style: 'article' | 'person' | 'item';
    fields: any[];
    url: string;
    enableBorder?: boolean;
    resource: DocumentType;
};
declare const Show: React.FC<ShowProps>;
export default Show;
