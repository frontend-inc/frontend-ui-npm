import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type BlogListItemsProps = {
    layout?: 'list' | 'grid' | 'slider';
    selectable?: boolean;
    href?: string;
    style?: 'list' | 'card' | 'avatar' | 'cover' | 'text';
    buttons: ButtonType[];
    metafields: MetafieldType[];
    handleClick?: (resource: any) => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    slots?: {
        list?: any;
        item?: any;
    };
};
declare const BlogListItems: React.FC<BlogListItemsProps>;
export default BlogListItems;
