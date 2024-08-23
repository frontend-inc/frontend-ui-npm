import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
type KanBanBoardProps = {
    loading?: boolean;
    headers: {
        label: string;
        value: string;
    }[];
    activeResource: any;
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    handleClick: (resource: any) => void;
    handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void;
    columns: Record<string, any>;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
    enableOverlay?: boolean;
    enableGradient?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableCreate?: boolean;
    handleEdit: (resource: any) => void;
    handleDelete: (resource: any) => void;
    handleAdd: (status: string) => void;
};
declare const KanBanBoard: React.FC<KanBanBoardProps>;
export default KanBanBoard;
