import React from "react";
type LoginFormProps = {
  errors?: any;
  loading?: boolean;
  user: any;
  handleChange: (ev: any) => void;
  handleSubmit: () => void;
  handleForgotPassword: () => void;
  handleSignup: () => void;
  handleOneTimePassword?: () => void;
};
declare const LoginForm: React.FC<LoginFormProps>;
export default LoginForm;
