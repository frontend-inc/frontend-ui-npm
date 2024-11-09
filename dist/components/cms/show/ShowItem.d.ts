import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type ShowProps = {
    resource: any;
    displayFields: MetafieldType[];
    buttons: ButtonType[];
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar';
export type ShowItemProps = ShowProps & {
    url?: string;
    style: ShowStyleTypes;
};
declare const ShowItem: React.FC<ShowItemProps>;
export default ShowItem;
