import React from 'react';
type AdminHeaderProps = {
    title?: string | React.ReactNode;
    buttons?: React.ReactNode;
    primaryActions?: React.ReactNode;
    secondaryActions?: React.ReactNode;
    disableBorder?: boolean;
    enableExpandLeftPanel?: boolean;
    enableExpandRightPanel?: boolean;
};
export default function AdminHeader({ title, buttons, primaryActions, secondaryActions, enableExpandLeftPanel, enableExpandRightPanel, disableBorder, }: AdminHeaderProps): React.JSX.Element;
export {};
