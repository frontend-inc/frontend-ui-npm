import React from 'react';
type SocialLinkProps = {
    provider: string;
    url?: string;
    color?: string;
    size?: number;
};
declare const SocialLink: React.FC<SocialLinkProps>;
export default SocialLink;
