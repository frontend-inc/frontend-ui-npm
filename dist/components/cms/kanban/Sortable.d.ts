import React from 'react';
import { ActionType, DisplayFieldType } from '../../../types';
type SortableProps = {
    loading?: boolean;
    headers: {
        label: string;
        value: string;
    }[];
    activeResource: any;
    actions: ActionType[];
    displayFields: DisplayFieldType[];
    handleClick: (resource: any) => void;
    handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void;
    columns: Record<string, any>;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableCreate?: boolean;
    handleEdit: (resource: any) => void;
    handleDelete: (resource: any) => void;
    handleAdd: (status: string) => void;
};
declare const Sortable: React.FC<SortableProps>;
export default Sortable;
