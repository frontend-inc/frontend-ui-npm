import React from 'react';
type ThemeProviderProps = {
    mode?: 'light' | 'dark';
    theme?: string;
    primaryColor?: string;
    headerFont?: string;
    bodyFont?: string;
    borderRadius: number;
    children: React.ReactNode;
};
declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
export default ThemeProvider;
