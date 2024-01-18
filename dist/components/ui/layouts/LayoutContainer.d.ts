import React, { ReactNode } from 'react';
import { Notification } from '../../../types';
type LayoutContainerProps = {
    position?: 'fixed' | 'absolute' | 'relative';
    mode?: 'accent' | 'light' | 'dark';
    showIcons?: boolean;
    showLabels?: boolean;
    topNav?: boolean;
    handleClick: (item: any) => void;
    menuItems: {
        label: string;
        path: string;
        icon?: string;
    }[];
    notifications: Notification[];
    children: ReactNode;
    editing?: boolean;
    enableAuth?: boolean;
    enableHeader?: boolean;
    enableShopify?: boolean;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
