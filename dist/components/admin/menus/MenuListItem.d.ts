import React from 'react';
interface SidebarMenuItemProps {
    title: string;
    icon?: string;
    color?: string;
    selected?: boolean;
    description?: string;
    secondaryAction?: React.ReactNode;
    handleClick: () => void;
    handleEdit?: () => void;
    handleDelete?: () => void;
}
export default function SidebarMenuItem({ selected, title, color, icon, secondaryAction, handleClick, handleEdit, handleDelete, }: SidebarMenuItemProps): React.JSX.Element;
export {};
