import React from "react";
type ForgotPasswordFormProps = {
  errors: any;
  loading?: boolean;
  user: any;
  handleChange: (e: any) => void;
  handleSubmit: () => void;
  handleLogin?: () => void;
};
declare const ForgotPasswordForm: React.FC<ForgotPasswordFormProps>;
export default ForgotPasswordForm;
