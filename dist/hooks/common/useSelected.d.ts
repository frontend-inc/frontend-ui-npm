import React from 'react';
declare const useSelected: () => {
    selected: any[];
    selectedIds: any[];
    setSelected: React.Dispatch<React.SetStateAction<any[]>>;
    setSelectedIds: React.Dispatch<React.SetStateAction<any[]>>;
    handleSelect: (item: any) => void;
    handleClear: () => void;
};
export default useSelected;
