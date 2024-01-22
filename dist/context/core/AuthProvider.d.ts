import React from "react";
type AuthProviderProps = {
    serverPath?: string;
    children: React.ReactNode;
};
declare const AuthProvider: (props: AuthProviderProps) => React.JSX.Element;
export default AuthProvider;
