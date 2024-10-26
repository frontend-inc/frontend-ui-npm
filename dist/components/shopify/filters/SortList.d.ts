import React from 'react';
type SortListProps = {
    enableIcons?: boolean;
    value: string;
    reverse?: boolean;
    options: Array<{
        value: string;
        reverse?: boolean;
        label: string;
    }>;
    handleClick: (value: string, reverse?: boolean) => void;
};
declare const SortList: React.FC<SortListProps>;
export default SortList;
