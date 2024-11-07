import React from 'react';
import { MenuLinkType, PolicyLinkType } from '../../../types';
export type FooterProps = {
    logo?: string;
    links?: MenuLinkType[];
    policies?: PolicyLinkType[];
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
