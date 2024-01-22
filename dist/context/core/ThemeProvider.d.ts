import React from "react";
type ThemeProviderProps = {
    children: React.ReactNode;
    primaryColor?: string;
    bgcolor?: string;
    headerFont?: string;
    bodyFont?: string;
    borderRadius?: number;
    mobile?: boolean;
    offset?: number;
};
declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
export default ThemeProvider;
