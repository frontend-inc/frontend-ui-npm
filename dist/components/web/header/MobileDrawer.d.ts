import React from 'react';
import { MenuLinkType } from '../../..';
type MobileDrawerProps = {
    links: MenuLinkType[];
    handleClick: (path: string) => void;
};
declare const MobileDrawer: (props: MobileDrawerProps) => React.JSX.Element;
export default MobileDrawer;
