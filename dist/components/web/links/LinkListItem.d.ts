import React from 'react';
export type LinkListItemProps = {
    variant?: 'fill' | 'outline' | 'default';
    color: string;
    icon: string;
    title: string;
    subtitle: string;
    path?: string;
    url?: string;
};
declare const LinkListItem: React.FC<LinkListItemProps>;
export default LinkListItem;
