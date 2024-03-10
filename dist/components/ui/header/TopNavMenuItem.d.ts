import React from 'react';
import { MenuLink } from '../../..';
type TopNavMenuItemProps = {
    menuItem: MenuLink;
    handleClick: (path: string) => void;
};
declare const TopNavMenuItem: React.FC<TopNavMenuItemProps>;
export default TopNavMenuItem;
