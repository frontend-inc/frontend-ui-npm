import React from 'react';
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types';
export type CollectionShowItemProps = {
    handle?: string;
    enableBorder?: boolean;
    actions: ActionType[];
    fieldName?: string;
    url?: string;
    resource: any;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableFavorites?: boolean;
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
