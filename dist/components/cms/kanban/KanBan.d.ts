import React from 'react';
import { ActionType, DisplayFieldType } from '../../../types';
export type KanBanProps = {
    loading?: boolean;
    resources: any;
    activeResource: any;
    fieldName: string;
    headers: {
        label: string;
        value: string;
    }[];
    actions: ActionType[];
    displayFields: DisplayFieldType[];
    handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void;
    handleClick: (resource: any) => void;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableCreate?: boolean;
    handleEdit: (resource: any) => void;
    handleDelete: (resource: any) => void;
    handleAdd: (status: string) => void;
};
declare const KanBan: React.FC<KanBanProps>;
export default KanBan;
