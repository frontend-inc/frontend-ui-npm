import React from 'react';
type SocialIconProps = {
    provider: string;
    url?: string;
    handleClick?: () => void;
    color?: string;
    size?: number;
};
declare const SocialIcon: React.FC<SocialIconProps>;
export default SocialIcon;
