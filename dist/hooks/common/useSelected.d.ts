import React from 'react';
declare const useSelected: () => {
    selected: any[];
    selectedIds: number[];
    setSelected: React.Dispatch<React.SetStateAction<any[]>>;
    setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
    handleSelect: (item: any) => void;
    handleClear: () => void;
};
export default useSelected;
