import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type DocumentShowProps = {
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
declare const DocumentShow: React.FC<DocumentShowProps>;
export default DocumentShow;
