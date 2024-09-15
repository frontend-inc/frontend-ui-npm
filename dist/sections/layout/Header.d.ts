import React from 'react';
import { HeaderProps } from '../../components/ui/header/Header';
type LayoutHeaderProps = HeaderProps & {
    mode: 'accent' | 'light' | 'dark';
};
declare const Header: React.FC<LayoutHeaderProps>;
export default Header;
