import React from 'react';
import { NotificationType } from '../../../types';
type LayoutContainerProps = {
    handleClick: (item: any) => void;
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    notifications: NotificationType[];
    offsetY?: number;
    roles?: string[];
    requireAuth?: boolean;
    requirePaid?: boolean;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
