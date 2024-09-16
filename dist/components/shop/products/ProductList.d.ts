import React from 'react';
import { ButtonType, DisplayFieldType, FormFieldType, SearchFilterOptionType, SortOptionType } from '../../../types';
export type ProductListProps = {
    grid?: boolean;
    selectable?: boolean;
    url?: string;
    href?: string;
    displayFields: DisplayFieldType[];
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableUsers?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableShow?: boolean;
    fields?: FormFieldType[];
    buttons?: ButtonType[];
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    perPage?: number;
    loadMore?: boolean;
    list: React.FC<any>;
    component?: React.FC<any>;
    header?: React.FC<any>;
    show?: React.FC<any>;
    empty?: React.FC<any>;
    slots?: {
        header?: any;
        list?: any;
        show?: any;
        empty?: any;
        item?: any;
    };
    foreignUrl?: string;
    query?: any;
    resource: any;
    filterSimilar?: boolean;
};
declare const ProductList: React.FC<ProductListProps>;
export default ProductList;
