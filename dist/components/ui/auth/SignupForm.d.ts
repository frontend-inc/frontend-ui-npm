import React from "react";
type SignupFormProps = {
  loading: boolean;
  user: Record<string, any>;
  errors: Record<string, any>;
  handleChange: (ev: any) => void;
  handleSubmit: () => void;
  handleLogin: () => void;
  disableUsername?: boolean;
};
declare const SignupForm: React.FC<SignupFormProps>;
export default SignupForm;
