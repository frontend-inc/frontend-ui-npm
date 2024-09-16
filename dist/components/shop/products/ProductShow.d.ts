import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
export type ShowModalProps = {
    handle?: string;
    enableBorder?: boolean;
    enableOverlay?: boolean;
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    fieldName?: string;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
};
declare const ShowModal: React.FC<ShowModalProps>;
export default ShowModal;
