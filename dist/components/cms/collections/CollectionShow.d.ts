import React from 'react';
import { ButtonType, FormFieldType, MetafieldType } from '../../../types';
export type ShowModalProps = {
    handle?: string;
    enableBorder?: boolean;
    enableOverlay?: boolean;
    buttons: ButtonType[];
    metafields: MetafieldType[];
    fields?: FormFieldType[];
    fieldName?: string;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableComments?: boolean;
};
declare const ShowModal: React.FC<ShowModalProps>;
export default ShowModal;
