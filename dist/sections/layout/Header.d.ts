import React from 'react';
import { HeaderProps } from '../../components/ui/header/Header';
type LayoutHeaderProps = HeaderProps & {
    mode: 'accent' | 'light' | 'dark';
};
declare const AppHeader: React.FC<LayoutHeaderProps>;
export default AppHeader;
