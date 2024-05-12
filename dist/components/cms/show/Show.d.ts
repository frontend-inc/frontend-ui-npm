import React from 'react';
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types';
export type ShowItemProps = {
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
export type ShowProps = ShowItemProps & {
    fields: FormFieldType[];
    displayFields: DisplayFieldType[];
    url: string;
    style: 'article' | 'person' | 'item' | 'youtube' | 'vimeo';
};
declare const Show: React.FC<ShowProps>;
export default Show;
