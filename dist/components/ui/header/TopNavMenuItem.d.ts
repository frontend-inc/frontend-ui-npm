import React from 'react';
import { MenuLinkType } from '../../..';
type TopNavMenuItemProps = {
    menuItem: MenuLinkType;
    handleClick: (path: string) => void;
};
declare const TopNavMenuItem: React.FC<TopNavMenuItemProps>;
export default TopNavMenuItem;
