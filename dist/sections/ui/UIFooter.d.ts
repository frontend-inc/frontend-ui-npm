import React from 'react';
import { FooterProps } from '../../components/web/footer/Footer';
type UIFooterProps = FooterProps & {
    bgColor: string;
    mode: 'light' | 'dark';
};
declare const UIFooter: React.FC<UIFooterProps>;
export default UIFooter;
