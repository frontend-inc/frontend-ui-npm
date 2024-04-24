import React from 'react';
import { MenuLinkType } from '../../../types';
type FooterProps = {
    menuLinks: MenuLinkType[];
    socialLinks: {
        name: string;
        url: string;
    }[];
    handleClick: (MenuItem: MenuLinkType) => void;
};
declare const Footer: React.FC<FooterProps>;
export default Footer;
