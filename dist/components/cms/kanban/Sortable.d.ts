import React from 'react';
import { ActionType, DisplayFieldType } from '../../../types';
type SortableProps = {
    headers: {
        label: string;
        value: string;
    }[];
    actions: ActionType[];
    displayFields: DisplayFieldType[];
    handleClick: (resource: any) => void;
    handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void;
    columns: Record<string, any>;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
};
declare const Sortable: React.FC<SortableProps>;
export default Sortable;
