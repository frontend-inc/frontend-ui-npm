import React from 'react';
import { MenuLinkType } from '../../..';
type MobileDrawerProps = {
    editing?: boolean;
    menuItems?: MenuLinkType[];
    handleClick: (path: string) => void;
    enableAuth?: boolean;
    enableShopify?: boolean;
};
declare const MobileDrawer: (props: MobileDrawerProps) => React.JSX.Element;
export default MobileDrawer;
