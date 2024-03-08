import React from 'react';
import { MenuLink } from '../../..';
type MobileMenuItemProps = {
    menuItem: MenuLink;
    handleClick: (path: string) => void;
};
declare const MobileMenuItem: React.FC<MobileMenuItemProps>;
export default MobileMenuItem;
