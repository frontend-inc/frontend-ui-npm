import React, { useEffect } from "react";
import {
  ResetPasswordForm,
  AuthScreen,
  LayoutLoader,
} from "../../../components";
import { useAuth } from "../../../hooks";
import { useRouter, useParams } from "next/navigation";

type ResetPasswordProps = {
  title?: string;
  subtitle?: string;
  loginUrl?: string;
  redirectUrl?: string;
};

const ResetPassword: React.FC<ResetPasswordProps> = (props) => {
  const router = useRouter();
  const { token: resetPasswordToken } = useParams();

  const {
    title = "Reset Password",
    subtitle = "Enter your new password",
    redirectUrl = "/login",
    loginUrl,
  } = props || {};

  const { loading, errors, user, handleChange, resetPassword } = useAuth();

  const handleSubmit = async () => {
    let resp = await resetPassword(
      user?.email,
      user?.password,
      user?.password_confirmation,
      String(resetPasswordToken)
    );
    if (resp?.id) {
      router.push(redirectUrl);
    }
  };

  const handleLogin = () => {
    router.push(loginUrl);
  };

  return (
    <LayoutLoader loading={loading}>
      <AuthScreen title={title} subtitle={subtitle}>
        <ResetPasswordForm
          loading={loading}
          errors={errors}
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleLogin={handleLogin}
        />
      </AuthScreen>
    </LayoutLoader>
  );
};

export default ResetPassword;
