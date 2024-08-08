import React from 'react';
import { NotificationType } from '../../../types';
type LayoutContainerProps = {
    handleClick: (item: any) => void;
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    sideNav?: boolean;
    notifications: NotificationType[];
    offsetY?: number;
    offsetX?: number;
    roles?: string[];
    requireAuth?: boolean;
    requireTeam?: boolean;
    requirePaid?: boolean;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
