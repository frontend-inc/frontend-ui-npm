import React from 'react';
import { MenuLinkType } from '../../../types';
type FooterProps = {
    menuItems?: MenuLinkType[];
    handleClick: (MenuItem: MenuLinkType) => void;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    tiktok?: string;
};
declare const Footer: React.FC<FooterProps>;
export default Footer;
