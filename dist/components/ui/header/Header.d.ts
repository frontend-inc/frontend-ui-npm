import React from 'react';
import { MenuLinkType } from '../../..';
type HeaderProps = {
    editing?: boolean;
    topNav?: boolean;
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
