import React from "react";
import { Customer } from "webstudio-shopify";
type SignupFormProps = {
  loading: boolean;
  customer: Customer;
  errors: Record<string, any>;
  handleChange: (ev: any) => void;
  handleSubmit: () => void;
  handleLogin: () => void;
};
declare const SignupForm: React.FC<SignupFormProps>;
export default SignupForm;
