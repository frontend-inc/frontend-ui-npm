import React from "react";
type FormProps = {
  handle: string;
  url: string;
  foreignUrl?: string;
  buttonText?: string;
  variant?: "contained" | "outlined" | "text";
  fields: any[];
  children?: React.ReactElement[];
};
declare const FormHasMany: React.FC<FormProps>;
export default FormHasMany;
