import React from 'react';
import { MenuLinkType } from '../../../types';
export type FooterProps = {
    logo?: string;
    links?: MenuLinkType[];
    legalLinks?: MenuLinkType[];
    socialLinks?: {
        label: string;
        provider: string;
        url: string;
        position: number;
    }[];
    handleClick: (path: string) => void;
};
declare const Footer: React.FC<FooterProps>;
export default Footer;
