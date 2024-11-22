import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type ShowContainerProps = {
    resource: any;
    metafields: MetafieldType[];
    buttons: ButtonType[];
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar';
export type ShowProps = ShowContainerProps & {
    url?: string;
    style: ShowStyleTypes;
};
declare const Show: React.FC<ShowProps>;
export default Show;
