import React from 'react';
import { FooterProps } from '../../components/ui/footer/Footer';
type LayoutFooterProps = FooterProps & {
    mode: 'accent' | 'light' | 'dark';
};
declare const Footer: React.FC<LayoutFooterProps>;
export default Footer;
