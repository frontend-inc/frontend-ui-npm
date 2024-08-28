import React from 'react';
type ResourceToolbarModalProps = {
    open: boolean;
    handleClose: () => void;
    actions: React.ReactNode;
    selected: any[];
    selectedIds: number[] | string[];
    buttons: {
        color?: 'primary' | 'secondary';
        variant?: 'contained' | 'outlined';
        icon?: string;
        label: string;
        onClick: (selected: any[]) => void;
    }[];
    component?: React.FC<any>;
};
declare const ResourceToolbar: React.FC<ResourceToolbarModalProps>;
export default ResourceToolbar;
