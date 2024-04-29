import React from 'react';
type SocialButtonsProps = {
    url: string;
    handle: string;
    enableLikes?: boolean;
    enableShares?: boolean;
    enableFavorites?: boolean;
    justifyContent?: string;
};
declare const SocialButtons: React.FC<SocialButtonsProps>;
export default SocialButtons;
