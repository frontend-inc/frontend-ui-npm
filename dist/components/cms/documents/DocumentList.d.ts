import React from 'react';
import { ButtonType, MetafieldType, ContentTypes } from '../../../types';
export type DocumentStyleTypes = 'card' | 'cover' | 'avatar' | 'list' | 'text' | 'video' | 'file' | 'image';
export type DocumentListProps = {
    layout?: 'list' | 'grid' | 'slider';
    contentType?: ContentTypes;
    style: DocumentStyleTypes;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterChoices?: string[];
    enableDownload?: boolean;
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableComments?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    displayTitle?: boolean;
    displaySubtitle?: boolean;
    displayCategory?: boolean;
    displayLocation?: boolean;
    displayDescription?: boolean;
    displayTags?: boolean;
    sortTitle?: boolean;
    sortPosition?: boolean;
    sortDate?: boolean;
    sortPublished?: boolean;
    sortPrice?: boolean;
    enableShow?: boolean;
    buttons?: ButtonType[];
    displayFields?: MetafieldType[];
    headers?: {
        label: string;
        value: string;
    }[];
    loadMore?: boolean;
    list: React.FC<any>;
    component?: React.FC<any>;
    header?: React.FC<any>;
    show?: React.FC<any>;
    edit?: React.FC<any>;
    create?: React.FC<any>;
    destroy?: React.FC<any>;
    empty?: React.FC<any>;
    slots?: {
        header?: any;
        toolbar?: any;
        list?: any;
        show?: any;
        edit?: any;
        create?: any;
        destroy?: any;
        empty?: any;
        item?: any;
    };
    circular?: boolean;
    disableImage?: boolean;
    url: string;
    query?: any;
    resource: any;
    filterSimilar?: boolean;
    filterGeo?: boolean;
};
declare const DocumentList: React.FC<DocumentListProps>;
export default DocumentList;
