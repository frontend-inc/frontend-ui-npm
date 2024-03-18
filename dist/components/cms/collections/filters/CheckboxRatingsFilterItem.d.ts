import React from 'react';
import { OptionType } from '../../../../types';
type CheckboxRatingsFilterItemProps = {
    label?: string;
    option: OptionType;
    values?: any;
    handleClick: () => void;
};
declare const CheckboxRatingsFilterItem: React.FC<CheckboxRatingsFilterItemProps>;
export default CheckboxRatingsFilterItem;
