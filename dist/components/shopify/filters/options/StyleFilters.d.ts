import React from "react";
import { ProductCollectionFilter } from "webstudio-shopify";
type StyleFiltersProps = {
  filters: ProductCollectionFilter[];
  options: string[];
  handleClick: (value: string) => void;
};
declare const StyleFilters: React.FC<StyleFiltersProps>;
export default StyleFilters;
