import React from 'react';
import { PriceOptionType, SearchFilterType } from 'frontend-shopify';
type RadioPriceRangeInputProps = {
    filters: SearchFilterType[];
    options: PriceOptionType[];
    handleClick: (filter: SearchFilterType) => void;
};
declare const RadioPriceRangeInput: React.FC<RadioPriceRangeInputProps>;
export default RadioPriceRangeInput;
