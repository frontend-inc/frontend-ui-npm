import React from 'react';
import { MenuLinkType } from '../../..';
type MobileNavProps = {
    editing?: boolean;
    logo: string;
    logoWidth?: number;
    logoHeight?: number;
    links: MenuLinkType[];
    enableShopify?: boolean;
    enableStripe?: boolean;
    enableNotifications?: boolean;
    handleClick: (path: string) => void;
};
declare const MobileNav: (props: MobileNavProps) => React.JSX.Element;
export default MobileNav;
