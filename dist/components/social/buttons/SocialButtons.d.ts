import React from 'react';
type SocialButtonsProps = {
    handle: string;
    direction?: 'row' | 'column';
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableSharing?: boolean;
    numLikes?: number;
    numFavorites?: number;
    justifyContent?: string;
};
declare const SocialButtons: React.FC<SocialButtonsProps>;
export default SocialButtons;
