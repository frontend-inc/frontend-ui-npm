import React from 'react';
import { FormFieldType } from '../../../types';
export type ForeignCollectionProps = {
    variant?: 'list' | 'grid';
    style?: 'card' | 'avatar' | 'cover';
    field: any;
    fields: FormFieldType[];
    resource: any;
    handle: string;
    url: string;
    foreignUrl: string;
    href?: any;
    perPage?: number;
    query?: any;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableFavorites?: boolean;
    enableLoadMore?: boolean;
};
declare const ForeignCollection: React.FC<ForeignCollectionProps>;
export default ForeignCollection;
