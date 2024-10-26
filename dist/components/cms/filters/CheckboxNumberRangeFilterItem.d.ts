import React from 'react';
type CheckboxNumberRangeFilterItemProps = {
    label?: string;
    option: {
        label: string;
        min: number;
        max: number;
    };
    values?: any[];
    handleClick: () => void;
};
declare const CheckboxNumberRangeFilterItem: React.FC<CheckboxNumberRangeFilterItemProps>;
export default CheckboxNumberRangeFilterItem;
