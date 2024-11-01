import React from 'react';
import { ShowItemProps } from './ShowItem';
export type ShowProps = ShowItemProps & {
    documentId?: string;
    url: string;
    resource?: any;
};
declare const Show: React.FC<ShowProps>;
export default Show;
