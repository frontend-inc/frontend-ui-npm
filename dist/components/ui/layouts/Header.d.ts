import React from 'react';
import { MenuItem } from '../../../components';
type MenuItem = {
    label: string;
    path: string;
    icon?: string;
};
type HeaderProps = {
    editing?: boolean;
    position?: 'fixed' | 'relative' | 'absolute';
    topNav?: boolean;
    mode?: 'accent' | 'light' | 'dark';
    showIcons?: boolean;
    logo?: string;
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableNotifications?: boolean;
    bgcolor?: string;
    menuItems?: MenuItem[];
    handleClick: (path: string) => void;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
