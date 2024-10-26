import React from 'react';
import { FooterProps } from '../../components/web/footer/Footer';
type LayoutFooterProps = FooterProps & {
    bgColor: string;
    mode: 'light' | 'dark';
};
declare const AppFooter: React.FC<LayoutFooterProps>;
export default AppFooter;
