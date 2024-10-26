import React from 'react';
type FooterLinksProps = {
    menuItem: {
        label: string;
        children?: Array<{
            label: string;
            path: string;
        }>;
    };
    handleClick: (path: string) => void;
};
declare const FooterLinks: React.FC<FooterLinksProps>;
export default FooterLinks;
