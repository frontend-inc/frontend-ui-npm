import React from 'react';
import { ShowProps } from './ShowItem';
type ShowLayoutProps = ShowProps & {
    fieldName?: string;
    resource?: any;
    children?: React.ReactNode;
};
declare const ShowLayout: React.FC<ShowLayoutProps>;
export default ShowLayout;
