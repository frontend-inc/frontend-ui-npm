import React from 'react';
import { ActionType, DocumentType } from '../../../types';
export type ShowProps = {
    style: 'article' | 'person' | 'item';
    fields: any[];
    url: string;
    enableBorder?: boolean;
    actions?: ActionType[];
    resource: DocumentType;
};
declare const Show: React.FC<ShowProps>;
export default Show;
