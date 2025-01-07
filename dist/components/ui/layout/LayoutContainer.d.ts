import React from 'react';
import { NotificationType } from '../../../types';
type LayoutContainerProps = {
    handleClick: (item: any) => void;
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    notifications: NotificationType[];
    requireAuth?: boolean;
    requirePaid?: boolean;
};
export default function LayoutContainer(props: LayoutContainerProps): React.JSX.Element;
export {};
