import React from "react";
type EditableTextInputProps = {
  value: string;
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (name: string, value: string) => void;
  loading?: boolean;
  placeholder?: string;
};
declare const EditableTextInput: React.FC<EditableTextInputProps>;
export default EditableTextInput;
