import React from "react";
type AppProviderProps = {
  clientUrl?: string;
  children: React.ReactNode;
  logo?: any;
};
declare const AppProvider: (props: AppProviderProps) => React.JSX.Element;
export default AppProvider;
