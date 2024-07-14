import React from 'react';
import { ActionType } from '../../../types';
export type ShowHeaderProps = {
    resource: any & {
        title?: string;
        subtitle?: string;
        label?: string;
    };
    links: {
        label: string;
        path: string;
    }[];
    maxLinks?: number;
    actions: ActionType[];
    enableBorder?: boolean;
};
declare const ShowHeader: React.FC<ShowHeaderProps>;
export default ShowHeader;
