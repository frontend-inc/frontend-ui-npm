import React from 'react';
import { MenuLink } from '../../..';
type DesktopMenuItemProps = {
    menuItem: MenuLink;
    handleClick: () => void;
};
declare const DesktopMenuItem: React.FC<DesktopMenuItemProps>;
export default DesktopMenuItem;
