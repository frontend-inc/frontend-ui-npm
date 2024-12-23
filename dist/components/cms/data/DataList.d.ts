import React from 'react';
import { ToolbarButtonType, FormFieldType, QueryParamsType, SearchFilterOptionType, SortOptionType, ButtonType } from '../../../types';
export type DataListProps = {
    layout?: 'grid' | 'list' | 'slider';
    selectable?: boolean;
    sortable?: boolean;
    url: string;
    name: string;
    query?: QueryParamsType;
    resource?: any;
    fields: FormFieldType[];
    filterOptions: SearchFilterOptionType[];
    sortOptions: SortOptionType[];
    buttons?: ButtonType[];
    enableSearch?: boolean;
    enableShow?: boolean;
    enableCreate?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    perPage?: number;
    loadMore?: boolean;
    list?: React.FC<any>;
    sortableList?: React.FC<any>;
    header?: React.FC<any>;
    toolbar?: React.FC<any>;
    show?: React.FC<any>;
    edit?: React.FC<any>;
    empty?: React.FC<any>;
    create?: React.FC<any>;
    destroy?: React.FC<any>;
    component?: React.FC<any>;
    toolbarButtons?: ToolbarButtonType[];
    slots?: {
        header?: any;
        toolbar?: any;
        list?: any;
        item?: any;
        show?: any;
        edit?: any;
        create?: any;
        destroy?: any;
        empty?: any;
    };
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const DataList: React.FC<DataListProps>;
export default DataList;
