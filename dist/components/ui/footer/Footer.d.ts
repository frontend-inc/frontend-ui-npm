import React from 'react';
import { MenuLinkType } from '../../../types';
type FooterProps = {
    menuLinks: MenuLinkType[];
    socialLinks: {
        label: string;
        provider: string;
        url: string;
        position: number;
    }[];
    handleClick: (path: string) => void;
};
declare const Footer: React.FC<FooterProps>;
export default Footer;
