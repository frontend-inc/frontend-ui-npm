import React from "react";
import { AuthScreen, LayoutLoader } from "../../../components";
import { useAuth } from "webstudio-shopify";
import { LoginForm } from "../../../components/shopify";
import { useRouter } from "next/navigation";

type LoginProps = {
  redirectUrl: string;
  title?: string;
  subtitle?: string;
  forgotPasswordUrl?: string;
  signupUrl?: string;
  oneTimePasswordUrl?: string;
};

const Login: React.FC<LoginProps> = (props) => {
  const {
    redirectUrl,
    title = "Sign In",
    subtitle = "Log in to your account",
    forgotPasswordUrl,
    signupUrl,
  } = props || {};

  const router = useRouter();
  const { errors, loading, customer, handleChange, login } = useAuth();

  const handleSubmit = async () => {
    let resp = await login(customer);
    if (resp?.accessToken) {
      router.push(redirectUrl);
    }
  };

  const handleSignup = () => {
    router.push(signupUrl);
  };

  const handleForgotPassword = () => {
    router.push(forgotPasswordUrl);
  };

  return (
    <LayoutLoader loading={loading}>
      <AuthScreen title={title} subtitle={subtitle}>
        <LoginForm
          errors={errors}
          loading={loading}
          customer={customer}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleSignup={signupUrl && handleSignup}
          handleForgotPassword={forgotPasswordUrl && handleForgotPassword}
        />
      </AuthScreen>
    </LayoutLoader>
  );
};

export default Login;
