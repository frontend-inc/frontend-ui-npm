import React from 'react';
import { ActionType } from '../../../types';
export type HeroHeaderProps = {
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
declare const HeroHeader: React.FC<HeroHeaderProps>;
export default HeroHeader;
