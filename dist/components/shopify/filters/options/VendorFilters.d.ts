import React from "react";
import { ProductCollectionFilter } from "webstudio-shopify";
type VendorFiltersProps = {
  filters: ProductCollectionFilter[];
  options: string[];
  handleClick: (value: string) => void;
};
declare const VendorFilters: React.FC<VendorFiltersProps>;
export default VendorFilters;
