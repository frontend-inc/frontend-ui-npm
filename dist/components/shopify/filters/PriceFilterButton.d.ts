import React from "react";
type PriceFilterButtonProps = {
  value: any;
  handleChange: any;
  label: string;
  minPrice: number;
  maxPrice: number;
};
declare const PriceFilterButton: React.FC<PriceFilterButtonProps>;
export default PriceFilterButton;
