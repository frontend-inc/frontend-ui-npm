import React from 'react';
import { MenuLinkType } from '../../..';
type DesktopNavProps = {
    logo: string;
    menuItems?: MenuLinkType[];
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableStripe?: boolean;
    enableNotifications?: boolean;
    handleClick: (path: string) => void;
    position?: 'fixed' | 'relative' | 'absolute';
};
declare const DesktopTopNav: (props: DesktopNavProps) => React.JSX.Element;
export default DesktopTopNav;
