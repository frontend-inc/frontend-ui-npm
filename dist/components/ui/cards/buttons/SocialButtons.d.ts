import React from 'react';
type SocialButtonsProps = {
    resource: any;
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableComments?: boolean;
    color?: string;
};
declare const SocialButtons: React.FC<SocialButtonsProps>;
export default SocialButtons;
