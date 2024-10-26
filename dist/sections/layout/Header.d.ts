import React from 'react';
import { HeaderProps } from '../../components/web/header/Header';
type LayoutHeaderProps = HeaderProps & {
    bgColor: string;
    mode: 'light' | 'dark';
};
declare const AppHeader: React.FC<LayoutHeaderProps>;
export default AppHeader;
