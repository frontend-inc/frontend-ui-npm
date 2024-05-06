import React from 'react';
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types';
export type ShowItemProps = {
    enableBorder?: boolean;
    actions: ActionType[];
    fieldName?: string;
    resource: any;
    enableEdit?: boolean;
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
