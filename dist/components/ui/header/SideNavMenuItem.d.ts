import React from 'react';
import { MenuLink } from '../../..';
type SideNavMenuItemProps = {
    menuItem: MenuLink;
    handleClick: (path: string) => void;
};
declare const SideNavMenuItem: React.FC<SideNavMenuItemProps>;
export default SideNavMenuItem;
