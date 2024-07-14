import React from 'react';
import { ShowProps } from './ShowItem';
type ShowLayoutProps = ShowProps & {
    children?: React.ReactNode;
};
declare const ShowLayout: React.FC<ShowLayoutProps>;
export default ShowLayout;
