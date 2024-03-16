import React from 'react';
type SocialLinkProps = {
    provider: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'tiktok' | 'blog';
    url: string;
};
declare const SocialLink: React.FC<SocialLinkProps>;
export default SocialLink;
