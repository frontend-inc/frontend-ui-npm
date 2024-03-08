import React from 'react';
import { MenuLink } from '../../..';
type MobileDrawerProps = {
    editing?: boolean;
    menuItems?: MenuLink[];
    handleClick: (path: string) => void;
    enableAuth?: boolean;
    enableShopify?: boolean;
};
declare const MobileDrawer: (props: MobileDrawerProps) => React.JSX.Element;
export default MobileDrawer;
