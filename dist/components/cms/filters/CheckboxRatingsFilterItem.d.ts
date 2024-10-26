import React from 'react';
type CheckboxRatingsFilterItemProps = {
    label?: string;
    option: {
        label: string;
        value: number;
    };
    values?: any[];
    handleClick: () => void;
};
declare const CheckboxRatingsFilterItem: React.FC<CheckboxRatingsFilterItemProps>;
export default CheckboxRatingsFilterItem;
