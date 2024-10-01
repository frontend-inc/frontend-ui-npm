import React from 'react';
import { FooterProps } from '../../components/ui/footer/Footer';
type LayoutFooterProps = FooterProps & {
    bgColor: 'string';
};
declare const AppFooter: React.FC<LayoutFooterProps>;
export default AppFooter;
