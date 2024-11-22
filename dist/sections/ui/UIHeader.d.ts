import React from 'react';
import { HeaderProps } from '../../components/web/header/Header';
type UIHeaderProps = HeaderProps & {
    bgColor: string;
    mode: 'light' | 'dark';
};
declare const UIHeader: React.FC<UIHeaderProps>;
export default UIHeader;
