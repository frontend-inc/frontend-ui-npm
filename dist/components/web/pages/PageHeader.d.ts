import React from 'react';
import { ButtonType } from '../../../types';
export type PageHeaderProps = {
    label?: string;
    title?: string;
    subtitle?: string;
    breadcrumbs: {
        label: string;
        path: string;
    }[];
    buttons: ButtonType[];
    enableBorder?: boolean;
};
declare const PageHeader: React.FC<PageHeaderProps>;
export default PageHeader;
