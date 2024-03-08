import React, { ReactNode } from 'react';
import { Notification } from '../../../types';
import { MenuLink } from '../../..';
type LayoutContainerProps = {
    position?: 'fixed' | 'absolute' | 'relative';
    mode?: 'accent' | 'light' | 'dark';
    topNav?: boolean;
    handleClick: (item: any) => void;
    menuItems: MenuLink[];
    notifications: Notification[];
    children: ReactNode;
    editing?: boolean;
    enableAuth?: boolean;
    enableHeader?: boolean;
    enableShopify?: boolean;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
