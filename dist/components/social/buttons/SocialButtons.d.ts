import React from 'react';
type SocialButtonsProps = {
    resource: any;
    direction?: 'row' | 'column';
    enableComments?: boolean;
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableAddToList?: boolean;
    enableSharing?: boolean;
    numLikes?: number;
    numFavorites?: number;
    justifyContent?: string;
    variant?: 'icon' | 'button';
    color?: string;
    spacing?: number;
};
declare const SocialButtons: React.FC<SocialButtonsProps>;
export default SocialButtons;
