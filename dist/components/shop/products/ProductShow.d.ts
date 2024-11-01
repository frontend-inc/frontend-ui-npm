import React from 'react';
export type ShowModalProps = {
    handle?: string;
    enableBorder?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ShowModal: React.FC<ShowModalProps>;
export default ShowModal;
