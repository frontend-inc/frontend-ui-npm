import React from 'react';
type CheckboxNumberRangeFilterItemProps = {
    label?: string;
    option: {
        min: number;
        max: number;
    };
    values?: any;
    handleClick: () => void;
    enableCurrency?: boolean;
};
declare const CheckboxNumberRangeFilterItem: React.FC<CheckboxNumberRangeFilterItemProps>;
export default CheckboxNumberRangeFilterItem;
