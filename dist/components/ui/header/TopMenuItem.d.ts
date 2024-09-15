import React from 'react';
import { MenuLinkType } from '../../..';
type TopMenuItemProps = {
    menuItem: MenuLinkType;
    handleClick: (path: string) => void;
};
declare const TopMenuItem: React.FC<TopMenuItemProps>;
export default TopMenuItem;
