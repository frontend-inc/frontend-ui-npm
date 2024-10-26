import React from 'react';
import { NotificationType } from '../../../types';
type LayoutContainerProps = {
    handleClick: (item: any) => void;
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    notifications: NotificationType[];
    roles?: string[];
    requireAuth?: boolean;
    requirePaid?: boolean;
};
export default function LayoutContainer({ children, notifications, requireAuth, requirePaid, roles, }: LayoutContainerProps): React.JSX.Element;
export {};
