import React from 'react';
import { NotificationType } from '../../../types';
type LayoutContainerProps = {
    handleClick: (item: any) => void;
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    enableSideNav?: boolean;
    notifications: NotificationType[];
    offsetY?: number;
    offsetX?: number;
    requireAuth?: boolean;
    requireTeam?: boolean;
    requirePaid?: boolean;
    requireAdmin?: boolean;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
