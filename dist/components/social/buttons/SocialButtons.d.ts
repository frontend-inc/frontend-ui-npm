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
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
    size?: 'small' | 'large';
    color?: string;
};
declare const SocialButtons: React.FC<SocialButtonsProps>;
export default SocialButtons;
