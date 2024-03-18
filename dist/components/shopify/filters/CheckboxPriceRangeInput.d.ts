import React from 'react';
import { PriceOptionType, SearchFilterType } from 'frontend-shopify';
type CheckboxPriceRangeInputProps = {
    filters: SearchFilterType[];
    options: PriceOptionType[];
    handleClick: (filter: SearchFilterType) => void;
};
declare const CheckboxPriceRangeInput: React.FC<CheckboxPriceRangeInputProps>;
export default CheckboxPriceRangeInput;
