import React from 'react';
import { MenuLink } from '../../..';
type DesktopNavProps = {
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
declare const DesktopTopNav: (props: DesktopNavProps) => React.JSX.Element;
export default DesktopTopNav;
