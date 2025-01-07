import React from 'react';
type LinkListType = {
    variant?: 'fill' | 'outline' | 'default';
    color: string;
    icon: string;
    title: string;
    subtitle: string;
    path?: string;
    url?: string;
};
export type LinkListProps = {
    variant?: 'fill' | 'outline' | 'default';
    items: LinkListType[];
};
declare const LinkList: React.FC<LinkListProps>;
export default LinkList;
