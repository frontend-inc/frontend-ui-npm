import React from "react";
import { SyntheticEvent } from "../../../types";
type SearchInputProps = {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  handleChange?: (e: SyntheticEvent) => void;
  handleSearch?: (keywords: string) => void;
  styles?: any;
};
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
