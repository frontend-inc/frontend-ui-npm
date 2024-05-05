import React from 'react';
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types';
export type ShowItemProps = {
    enableBorder?: boolean;
    actions: ActionType[];
    resource: any;
    enableEdit?: boolean;
    handleEdit?: () => void;
};
export type ShowProps = ShowItemProps & {
    fields: FormFieldType[];
    displayFields: DisplayFieldType[];
    url: string;
    style: 'article' | 'person' | 'item';
};
declare const Show: React.FC<ShowProps>;
export default Show;
