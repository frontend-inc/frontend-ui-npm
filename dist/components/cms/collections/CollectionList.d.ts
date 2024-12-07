import React from 'react';
import { ButtonType, MetafieldType, FormFieldType } from '../../../types';
export type CollectionListProps = {
    layout?: 'list' | 'grid' | 'slider';
    style: string;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterChoices?: string[];
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableComments?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
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
    fields?: FormFieldType[];
    buttons?: ButtonType[];
    displayFields?: MetafieldType[];
    headers?: {
        label: string;
        value: string;
    }[];
    perPage?: number;
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
declare const CollectionList: React.FC<CollectionListProps>;
export default CollectionList;
