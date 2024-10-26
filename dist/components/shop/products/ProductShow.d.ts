import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
export type ShowModalProps = {
    handle?: string;
    enableBorder?: boolean;
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    fieldName?: string;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ShowModal: React.FC<ShowModalProps>;
export default ShowModal;
