import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type CollectionShowProps = {
    buttons: ButtonType[];
    metafields: MetafieldType[];
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableComments?: boolean;
    disableImage?: boolean;
    enableBorder?: boolean;
    enableOverlay?: boolean;
};
declare const CollectionShow: React.FC<CollectionShowProps>;
export default CollectionShow;
