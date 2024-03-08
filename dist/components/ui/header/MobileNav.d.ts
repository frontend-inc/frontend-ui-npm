import React from 'react';
import { MenuLink } from '../../..';
type MobileNavProps = {
    editing?: boolean;
    logo?: string;
    logoWidth?: number;
    logoHeight?: number;
    menuItems?: MenuLink[];
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableNotifications?: boolean;
    handleClick: (path: string) => void;
    position?: 'fixed' | 'relative' | 'absolute';
};
declare const MobileNav: (props: MobileNavProps) => React.JSX.Element;
export default MobileNav;
