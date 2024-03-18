import React from 'react';
import { OptionType } from '../../../../types';
type CheckboxFilterItemProps = {
    label?: string;
    option: OptionType;
    values?: any;
    handleClick: () => void;
};
declare const CheckboxFilterItem: React.FC<CheckboxFilterItemProps>;
export default CheckboxFilterItem;
