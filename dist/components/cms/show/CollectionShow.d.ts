import React from 'react';
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types';
export type CollectionShowItemProps = {
    handle?: string;
    enableBorder?: boolean;
    actions: ActionType[];
    fieldName?: string;
    contentType?: string;
    resource: any;
    enableEdit?: boolean;
    enableCreate?: boolean;
    handleEdit?: () => void;
};
export type CollectionShowProps = CollectionShowItemProps & {
    fields: FormFieldType[];
    displayFields: DisplayFieldType[];
    url: string;
    style: 'article' | 'person' | 'item' | 'youtube' | 'vimeo';
};
declare const CollectionShow: React.FC<CollectionShowProps>;
export default CollectionShow;
