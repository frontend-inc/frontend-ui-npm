import React from 'react';
import { MenuLinkType } from '../../../types';
type HeaderProps = {
    sideNav?: boolean;
    mode?: 'accent' | 'light' | 'dark';
    logo?: string;
    enableAuth?: boolean;
    enableStripe?: boolean;
    enableShopify?: boolean;
    enableNotifications?: boolean;
    bgcolor?: string;
    menuItems: MenuLinkType[];
    handleClick: (path: string) => void;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
