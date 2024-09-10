import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
export type ShowProps = {
    handle?: string;
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    resource: any;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enableAddToList?: boolean;
    enableUsers?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    handleEdit?: (res: any) => void;
};
type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar' | 'snippet';
export type ShowItemProps = ShowProps & {
    url?: string;
    style: ShowStyleTypes;
    slots?: {
        image?: any;
        content?: any;
    };
};
declare const ShowItem: React.FC<ShowItemProps>;
export default ShowItem;
