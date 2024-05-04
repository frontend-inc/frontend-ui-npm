import React from 'react';
type ThemeProps = {
    muiTheme?: any;
    primaryColor?: string;
    bgcolor?: string;
    borderRadius?: number;
    bodyFont?: string;
    headerFont?: string;
    offset?: number;
    deviceSize?: 'mobile' | 'tablet' | 'desktop';
};
declare const useTheme: (props: ThemeProps) => {
    theme: any;
    setTheme: React.Dispatch<any>;
};
export default useTheme;
