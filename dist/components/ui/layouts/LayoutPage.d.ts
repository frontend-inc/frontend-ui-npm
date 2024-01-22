import React from "react";
type LayoutPageProps = {
    title: string;
    actions?: React.ReactNode;
    secondaryActions?: React.ReactNode;
    menuItems?: any[];
    activeItem?: string;
    loading?: boolean;
    disableGutters?: boolean;
    children: React.ReactNode;
};
declare const LayoutPage: React.FC<LayoutPageProps>;
export default LayoutPage;
