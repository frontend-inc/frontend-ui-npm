import React from 'react';
type KanBanBoardProps = {
    loading?: boolean;
    headers: {
        label: string;
        value: string;
    }[];
    handleClick: (resource: any) => void;
    handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void;
    columns: Record<string, any>;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableCreate?: boolean;
    handleEdit: (resource: any) => void;
    handleDelete: (resource: any) => void;
    handleAdd: (status: string) => void;
    component?: React.FC<any>;
    slots?: {
        list?: any;
        card?: any;
    };
};
declare const KanBanBoard: React.FC<KanBanBoardProps>;
export default KanBanBoard;
