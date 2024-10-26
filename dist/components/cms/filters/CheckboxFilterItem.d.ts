import React from 'react';
type CheckboxFilterItemProps = {
    label?: string;
    option: {
        label: string;
        value: string | number | boolean;
    };
    values?: any[];
    handleClick: () => void;
};
declare const CheckboxFilterItem: React.FC<CheckboxFilterItemProps>;
export default CheckboxFilterItem;
