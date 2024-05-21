import React from 'react';
import { MenuLinkType } from '../../../types';
type HeaderProps = {
    editing?: boolean;
    sideNav?: boolean;
    mode?: 'accent' | 'light' | 'dark';
    logo?: string;
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableNotifications?: boolean;
    bgcolor?: string;
    menuItems: MenuLinkType[];
    handleClick: (path: string) => void;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
