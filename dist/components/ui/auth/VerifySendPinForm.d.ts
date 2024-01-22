import React from "react";
type SendPinFormProps = {
  errors: Record<string, any>;
  loading?: boolean;
  user: Record<string, any>;
  handleChange: (ev: any) => void;
  handleSubmit: () => void;
};
declare const SendPinForm: React.FC<SendPinFormProps>;
export default SendPinForm;
