import React from 'react';
interface SidebarMenuHeaderProps {
    label: string;
    isOpen?: boolean;
    enableBorder?: boolean;
    children: React.ReactNode;
}
export default function SidebarMenuHeader({ label, enableBorder, isOpen, children, }: SidebarMenuHeaderProps): React.JSX.Element;
export {};
