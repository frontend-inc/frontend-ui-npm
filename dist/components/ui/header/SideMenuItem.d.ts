import React from 'react';
import { MenuLinkType } from '../../..';
type SideNavMenuItemProps = {
    menuItem: MenuLinkType;
    handleClick: (path: string) => void;
};
declare const SideNavMenuItem: React.FC<SideNavMenuItemProps>;
export default SideNavMenuItem;
