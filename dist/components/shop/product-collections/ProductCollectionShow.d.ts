import React from 'react';
export type ShowModalProps = {
    handle?: string;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const ShowModal: React.FC<ShowModalProps>;
export default ShowModal;
