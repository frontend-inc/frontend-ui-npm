import React, { useState, useEffect } from "react";
import { CheckboxFilterList } from "../../../../components/shopify";
import { ProductCollectionFilter } from "webstudio-shopify";
import { findMaterialFilters } from "webstudio-shopify";

type MaterialFiltersProps = {
  filters: ProductCollectionFilter[];
  options: string[];
  handleClick: (value: string) => void;
};

const MaterialFilters: React.FC<MaterialFiltersProps> = (props) => {
  const { filters, options, handleClick } = props;

  const [values, setValues] = useState([]);

  useEffect(() => {
    if (filters) {
      setValues(findMaterialFilters(filters));
    }
  }, [filters]);

  return (
    <CheckboxFilterList
      options={options}
      values={values}
      handleClick={handleClick}
    />
  );
};

export default MaterialFilters;
