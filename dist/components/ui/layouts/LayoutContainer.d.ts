import React, { ReactNode } from 'react';
import { Notification } from '../../../types';
type MenuItem = {
    name: string;
    path: string;
    url?: string;
    icon?: string;
    position: number;
    children?: MenuItem[];
};
type LayoutContainerProps = {
    position?: 'fixed' | 'absolute' | 'relative';
    mode?: 'accent' | 'light' | 'dark';
    topNav?: boolean;
    handleClick: (item: any) => void;
    menuItems: MenuItem[];
    notifications: Notification[];
    children: ReactNode;
    editing?: boolean;
    enableAuth?: boolean;
    enableHeader?: boolean;
    enableShopify?: boolean;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
