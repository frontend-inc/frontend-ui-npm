import React from 'react';
type SocialButtonsProps = {
    resource: any;
    product?: any;
    direction?: 'row' | 'column';
    enableComments?: boolean;
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableSharing?: boolean;
    enableProductLikes?: boolean;
    enableProductFavorites?: boolean;
    numLikes?: number;
    numFavorites?: number;
    justifyContent?: string;
    size?: 'small' | 'large';
    color?: string;
};
declare const SocialButtons: React.FC<SocialButtonsProps>;
export default SocialButtons;
