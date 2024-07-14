import React from 'react';
import { ActionType, FormFieldType, DisplayFieldType } from '../../../types';
export type ShowProps = {
    handle?: string;
    actions: ActionType[];
    displayFields: DisplayFieldType[];
    fieldName?: string;
    url?: string;
    resource: any;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enablePayments?: boolean;
    enableUsers?: boolean;
    enableOverlay?: boolean;
    handleEdit?: (res: any) => void;
};
type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar' | 'youtube' | 'vimeo';
export type ShowItemProps = ShowProps & {
    fieldName: string;
    fields?: FormFieldType[];
    url: string;
    style: ShowStyleTypes;
};
declare const ShowItem: React.FC<ShowItemProps>;
export default ShowItem;
