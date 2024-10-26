import React from 'react';
type CellHeaderProps = {
    field: {
        name: string;
        label: string;
    };
    sortBy: string;
    sortDirection: string;
    handleSort: (header: any) => void;
};
export default function CellHeader({ field, sortBy, sortDirection, handleSort, }: CellHeaderProps): React.JSX.Element;
export {};
