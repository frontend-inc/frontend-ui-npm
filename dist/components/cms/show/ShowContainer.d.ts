import React from 'react';
import { ShowProps } from './Show';
export type ShowContainerProps = ShowProps & {
    documentId?: string;
    url: string;
    resource?: any;
};
declare const ShowContainer: React.FC<ShowContainerProps>;
export default ShowContainer;
