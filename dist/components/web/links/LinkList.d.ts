import React from 'react';
import { ActionType } from '../../../types';
type LinkListType = {
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
export type LinkListProps = {
    variant?: 'fill' | 'outline' | 'default';
    items: LinkListType[];
};
declare const LinkList: React.FC<LinkListProps>;
export default LinkList;
