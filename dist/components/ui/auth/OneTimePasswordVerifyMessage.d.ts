import React from "react";
type OneTimePasswordVerifyFormProps = {
    verified: boolean;
    handleLogin?: () => void;
    handleRedirect: () => void;
};
declare const OneTimePasswordVerifyForm: React.FC<OneTimePasswordVerifyFormProps>;
export default OneTimePasswordVerifyForm;
