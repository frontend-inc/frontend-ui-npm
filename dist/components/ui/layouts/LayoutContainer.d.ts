import React, { ReactNode } from 'react';
import { NotificationType } from '../../../types';
import { MenuLinkType } from '../../..';
type LayoutContainerProps = {
    position?: 'fixed' | 'absolute' | 'relative';
    mode?: 'accent' | 'light' | 'dark';
    topNav?: boolean;
    handleClick: (item: any) => void;
    headerLinks: MenuLinkType[];
    footerLinks: MenuLinkType[];
    socialUrls: string[];
    notifications: NotificationType[];
    children: ReactNode;
    editing?: boolean;
    enableAuth?: boolean;
    enableShopify?: boolean;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
