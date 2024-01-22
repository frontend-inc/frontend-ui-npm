import React from "react";
type OneTimePasswordProps = {
  redirectUrl: string;
  title?: string;
  subtitle?: string;
  loginUrl?: string;
  authConfig?: Record<any, string>;
};
declare const OneTimePassword: React.FC<OneTimePasswordProps>;
export default OneTimePassword;
