import React from 'react';
type AdminLayoutProps = {
    logo?: string;
    handleClick: (item: any) => void;
    menuItems?: any[];
    secondaryAction?: React.ReactNode;
    children: React.ReactNode;
};
export default function AdminLayout({ logo, children, handleClick, menuItems, secondaryAction, }: AdminLayoutProps): React.JSX.Element;
export {};
