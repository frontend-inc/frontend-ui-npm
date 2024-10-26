import React from 'react';
import { MenuLinkType } from '../../..';
type DesktopLinkProps = {
    menuItem: MenuLinkType;
    handleClick: (path: string) => void;
};
declare const DesktopLink: React.FC<DesktopLinkProps>;
export default DesktopLink;
