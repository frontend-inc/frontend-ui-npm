import React from "react";
import { ProductCollectionFilter } from "webstudio-shopify";
type ColorFiltersProps = {
    filters: ProductCollectionFilter[];
    options: string[];
    handleClick: (value: string | number) => void;
};
declare const ColorFilters: React.FC<ColorFiltersProps>;
export default ColorFilters;
