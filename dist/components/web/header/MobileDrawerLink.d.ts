import React from 'react';
import { MenuLinkType } from '../../..';
type MobileDrawerLinkProps = {
    menuItem: MenuLinkType;
    handleClick: (path: string) => void;
};
declare const MobileDrawerLink: React.FC<MobileDrawerLinkProps>;
export default MobileDrawerLink;
