import React from 'react';
import { ActionType } from '../../../types';
export type LinkListItemProps = {
    fill?: boolean;
    border?: boolean;
    color: string;
    icon: string;
    title: string;
    subtitle: string;
    action: ActionType;
    path?: string;
    url?: string;
    src?: string;
};
declare const LinkListItem: React.FC<LinkListItemProps>;
export default LinkListItem;
