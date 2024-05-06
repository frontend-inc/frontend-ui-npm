import React, { ReactNode } from 'react';
import { NotificationType } from '../../../types';
type LayoutContainerProps = {
    handleClick: (item: any) => void;
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    enableSideNav?: boolean;
    notifications: NotificationType[];
    offsetY?: number;
    offsetX?: number;
};
declare const LayoutContainer: React.FC<LayoutContainerProps>;
export default LayoutContainer;
