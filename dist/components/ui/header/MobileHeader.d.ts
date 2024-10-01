import React from 'react';
import { ButtonType, MenuLinkType } from '../../..';
type MobileNavProps = {
    logo: string;
    logoWidth?: number;
    logoHeight?: number;
    links: MenuLinkType[];
    buttons: ButtonType[];
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableStripe?: boolean;
    enableNotifications?: boolean;
    handleClick: (path: string) => void;
};
declare const MobileNav: (props: MobileNavProps) => React.JSX.Element;
export default MobileNav;
