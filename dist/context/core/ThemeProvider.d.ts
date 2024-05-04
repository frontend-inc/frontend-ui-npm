import React from 'react';
type ThemeProviderProps = {
    children: React.ReactNode;
    muiTheme?: any;
    primaryColor?: string;
    bgcolor?: string;
    headerFont?: string;
    bodyFont?: string;
    borderRadius?: number;
    deviceSize?: 'mobile' | 'tablet' | 'desktop';
    offset?: number;
};
declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
export default ThemeProvider;
