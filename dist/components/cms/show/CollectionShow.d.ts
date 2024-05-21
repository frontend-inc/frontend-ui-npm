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
type CollectionShowStyleTypes = 'item' | 'article' | 'person' | 'document' | 'youtube' | 'vimeo';
export type CollectionShowProps = CollectionShowItemProps & {
    fields: FormFieldType[];
    displayFields: DisplayFieldType[];
    url: string;
    style: CollectionShowStyleTypes;
};
declare const CollectionShow: React.FC<CollectionShowProps>;
export default CollectionShow;
