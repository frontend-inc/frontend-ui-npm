import React from "react";
type ApiProviderProps = {
    url: string;
    clientUrl?: string;
    apiKey?: string;
    authCookie: string;
    children: React.ReactNode;
};
declare const ApiProvider: (props: ApiProviderProps) => React.JSX.Element;
export default ApiProvider;
