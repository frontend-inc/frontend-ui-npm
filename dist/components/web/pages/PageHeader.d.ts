import React from 'react';
import { ButtonType } from '../../../types';
export type PageHeaderProps = {
    label?: string;
    title?: string;
    description?: string;
    links: {
        label: string;
        path: string;
    }[];
    maxLinks?: number;
    buttons: ButtonType[];
    resource?: any;
    enableBorder?: boolean;
};
declare const PageHeader: React.FC<PageHeaderProps>;
export default PageHeader;
