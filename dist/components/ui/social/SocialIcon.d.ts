import React from 'react';
type SocialIconProps = {
    provider: string;
    url?: string;
    handleClick?: () => void;
    color?: string;
};
declare const SocialIcon: React.FC<SocialIconProps>;
export default SocialIcon;
