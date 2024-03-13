import React from 'react';
import { MenuLinkType } from '../../..';
type MobileNavProps = {
    editing?: boolean;
    logo: string;
    logoWidth?: number;
    logoHeight?: number;
    menuItems?: MenuLinkType[];
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableNotifications?: boolean;
    handleClick: (path: string) => void;
    position?: 'fixed' | 'relative' | 'absolute';
};
declare const MobileNav: (props: MobileNavProps) => React.JSX.Element;
export default MobileNav;
