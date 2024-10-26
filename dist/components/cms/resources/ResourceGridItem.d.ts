import React from 'react';
export type ResourceGridItemProps = {
    selectable?: boolean;
    selected?: boolean;
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
    avatar?: React.ReactNode;
    icon?: string;
    color?: string;
    label?: string;
    image?: string;
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    handleSelect?: () => void;
    secondaryAction?: React.ReactNode;
    menuActions?: React.ReactNode;
    sortable?: boolean;
    isDragging?: boolean;
    enableBorder?: boolean;
    slots?: {
        image?: any;
    };
};
export default function ResourceGridItem({ selectable, selected, primary, secondary, avatar, label, image, handleClick, handleEdit, handleDelete, handleSelect, secondaryAction, menuActions, enableBorder, slots, }: ResourceGridItemProps): React.JSX.Element;
