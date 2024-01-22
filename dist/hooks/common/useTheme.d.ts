import React from "react";
type ThemeProps = {
    primaryColor?: string;
    bgcolor?: string;
    borderRadius?: number;
    bodyFont?: string;
    headerFont?: string;
    offset?: number;
    mobile?: boolean;
};
declare const useTheme: (props: ThemeProps) => {
    theme: {
        breakpoints: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
            };
        };
        components: {
            MuiAccordian: {
                styleOverrides: {
                    root: {
                        bgcolor: string;
                        "&:before": {
                            bgcolor: string;
                        };
                    };
                };
            };
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        fontFamily: string;
                    };
                    deletable: {
                        "&:focus": {};
                    };
                };
            };
            MuiButton: {
                defaultProps: {
                    disableRipple: boolean;
                };
                styleOverrides: {
                    root: {
                        whiteSpace: string;
                    };
                    sizeSmall: {
                        height: string;
                        minWidth: string;
                    };
                    sizeLarge: {
                        height: string;
                    };
                    outlined: {
                        boxShadow: string;
                        "&:hover": {
                            boxShadow: string;
                        };
                    };
                    contained: {
                        boxShadow: string;
                        "&:hover": {
                            boxShadow: string;
                        };
                    };
                };
            };
            MuiCardActions: {
                styleOverrides: {
                    root: {
                        p: string;
                    };
                };
            };
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        p: number;
                    };
                };
            };
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        p: string;
                    };
                };
            };
            MuiChip: {
                styleOverrides: {
                    root: {
                        bgcolor: string;
                        fontFamily: string;
                    };
                    deletable: {
                        "&:focus": {};
                    };
                };
            };
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        fontFamily: string;
                        "& .MuiInputBase-root": {
                            fontFamily: string;
                        };
                    };
                };
            };
            MuiDrawer: {
                styleOverrides: {
                    root: {};
                };
            };
            MuiFormControlLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: string;
                        textTransform: string;
                        fontWeight: number;
                        fontSize: number;
                        "@media (max-width:600px)": {
                            fontSize: number;
                        };
                    };
                };
            };
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: string;
                        "&:hover": {};
                    };
                };
            };
            MuiInputBase: {
                styleOverrides: {
                    root: {};
                    input: {
                        "&::placeholder": {
                            opacity: number;
                            color: "#212121";
                        };
                    };
                };
            };
            MuiLinearProgress: {
                styleOverrides: {
                    root: {
                        overflow: string;
                    };
                    colorPrimary: {};
                };
            };
            MuiListItem: {
                styleOverrides: {
                    button: {
                        "&:hover": {};
                    };
                };
            };
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: string;
                        minWidth: number;
                    };
                };
            };
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        fontSize: string;
                    };
                    notchedOutline: {
                        borderColor: string;
                    };
                };
            };
            MuiPaper: {
                styleOverrides: {
                    root: {};
                };
            };
            MuiSkeleton: {
                styleOverrides: {
                    root: {
                        bgcolor: string;
                    };
                };
            };
            MuiRadio: {
                styleOverrides: {
                    root: {
                        fontSize: string;
                        textTransform: string;
                    };
                    input: {
                        "&::placeholder": {
                            opacity: number;
                            color: "#212121";
                        };
                    };
                };
            };
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: string;
                        borderBottom: string;
                        fontFamily: string;
                        textTransform: string;
                        fontWeight: number;
                        fontSize: number;
                        "@media (max-width:600px)": {
                            fontSize: number;
                        };
                    };
                };
            };
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        width: string;
                        bgcolor: any;
                    };
                };
            };
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        "&$selected": {
                            bgcolor: string;
                        };
                        "&$hover": {
                            "&:hover": {
                                bgcolor: string;
                            };
                        };
                    };
                };
            };
            MuiToggleButton: {
                styleOverrides: {
                    root: {
                        color: string;
                        "&:hover": {
                            bgcolor: string;
                        };
                        "&$selected": {
                            bgcolor: string;
                            color: "#3f51b5";
                            "&:hover": {
                                bgcolor: string;
                            };
                        };
                        "&:first-child": {
                            borderTopLeftRadius: number;
                            borderBottomLeftRadius: number;
                        };
                        "&:last-child": {
                            borderTopRightRadius: number;
                            borderBottomRightRadius: number;
                        };
                    };
                };
            };
            MuiTypography: {
                styleOverrides: {
                    gutterBottom: {
                        mb: number;
                    };
                };
            };
        };
        palette: {
            editor: {
                dark: string;
                main: string;
                light: string;
            };
            primary: {
                main: "#3f51b5";
            };
            secondary: {
                main: "#212121";
            };
            accent: {
                main: "#212121";
                light: "#424242";
                contrastText: "#fafafa";
            };
            success: {
                main: "#4caf50";
            };
            error: {
                main: "#e91e63";
            };
            warning: {
                main: "#ff9800";
            };
            text: {
                primary: string;
                secondary: "#212121";
            };
            background: {
                default: string;
                paper: string;
                light: string;
                dark: string;
            };
            grey: {
                dark: string;
                main: string;
                light: string;
            };
            active: {
                hover: string;
                selected: string;
            };
            divider: "#e0e0e0";
        };
        typography: {
            h1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                lineHeight: string;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            h2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            h3: {
                fontFamily: string;
                fontWeight: number;
                textIndent: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
                lineHeight: string;
            };
            h4: {
                fontFamily: string;
                fontSize: number;
                fontWeight: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            h5: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
            };
            h6: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
            };
            subtitle1: {
                fontFamily: string;
                fontSize: number;
                fontWeight: number;
                lineHeight: string;
                textTransform: string;
            };
            subtitle2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                lineHeight: string;
            };
            body1: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            body2: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            button: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
            };
            caption: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                letterSpacing: string;
            };
            overline: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
                letterSpacing: string;
            };
        };
        shape: {
            borderRadius: number;
        };
        spacing: number;
    };
    setTheme: React.Dispatch<React.SetStateAction<{
        breakpoints: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
            };
        };
        components: {
            MuiAccordian: {
                styleOverrides: {
                    root: {
                        bgcolor: string;
                        "&:before": {
                            bgcolor: string;
                        };
                    };
                };
            };
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        fontFamily: string;
                    };
                    deletable: {
                        "&:focus": {};
                    };
                };
            };
            MuiButton: {
                defaultProps: {
                    disableRipple: boolean;
                };
                styleOverrides: {
                    root: {
                        whiteSpace: string;
                    };
                    sizeSmall: {
                        height: string;
                        minWidth: string;
                    };
                    sizeLarge: {
                        height: string;
                    };
                    outlined: {
                        boxShadow: string;
                        "&:hover": {
                            boxShadow: string;
                        };
                    };
                    contained: {
                        boxShadow: string;
                        "&:hover": {
                            boxShadow: string;
                        };
                    };
                };
            };
            MuiCardActions: {
                styleOverrides: {
                    root: {
                        p: string;
                    };
                };
            };
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        p: number;
                    };
                };
            };
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        p: string;
                    };
                };
            };
            MuiChip: {
                styleOverrides: {
                    root: {
                        bgcolor: string;
                        fontFamily: string;
                    };
                    deletable: {
                        "&:focus": {};
                    };
                };
            };
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        fontFamily: string;
                        "& .MuiInputBase-root": {
                            fontFamily: string;
                        };
                    };
                };
            };
            MuiDrawer: {
                styleOverrides: {
                    root: {};
                };
            };
            MuiFormControlLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: string;
                        textTransform: string;
                        fontWeight: number;
                        fontSize: number;
                        "@media (max-width:600px)": {
                            fontSize: number;
                        };
                    };
                };
            };
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: string;
                        "&:hover": {};
                    };
                };
            };
            MuiInputBase: {
                styleOverrides: {
                    root: {};
                    input: {
                        "&::placeholder": {
                            opacity: number;
                            color: "#212121";
                        };
                    };
                };
            };
            MuiLinearProgress: {
                styleOverrides: {
                    root: {
                        overflow: string;
                    };
                    colorPrimary: {};
                };
            };
            MuiListItem: {
                styleOverrides: {
                    button: {
                        "&:hover": {};
                    };
                };
            };
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: string;
                        minWidth: number;
                    };
                };
            };
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        fontSize: string;
                    };
                    notchedOutline: {
                        borderColor: string;
                    };
                };
            };
            MuiPaper: {
                styleOverrides: {
                    root: {};
                };
            };
            MuiSkeleton: {
                styleOverrides: {
                    root: {
                        bgcolor: string;
                    };
                };
            };
            MuiRadio: {
                styleOverrides: {
                    root: {
                        fontSize: string;
                        textTransform: string;
                    };
                    input: {
                        "&::placeholder": {
                            opacity: number;
                            color: "#212121";
                        };
                    };
                };
            };
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: string;
                        borderBottom: string;
                        fontFamily: string;
                        textTransform: string;
                        fontWeight: number;
                        fontSize: number;
                        "@media (max-width:600px)": {
                            fontSize: number;
                        };
                    };
                };
            };
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        width: string;
                        bgcolor: any;
                    };
                };
            };
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        "&$selected": {
                            bgcolor: string;
                        };
                        "&$hover": {
                            "&:hover": {
                                bgcolor: string;
                            };
                        };
                    };
                };
            };
            MuiToggleButton: {
                styleOverrides: {
                    root: {
                        color: string;
                        "&:hover": {
                            bgcolor: string;
                        };
                        "&$selected": {
                            bgcolor: string;
                            color: "#3f51b5";
                            "&:hover": {
                                bgcolor: string;
                            };
                        };
                        "&:first-child": {
                            borderTopLeftRadius: number;
                            borderBottomLeftRadius: number;
                        };
                        "&:last-child": {
                            borderTopRightRadius: number;
                            borderBottomRightRadius: number;
                        };
                    };
                };
            };
            MuiTypography: {
                styleOverrides: {
                    gutterBottom: {
                        mb: number;
                    };
                };
            };
        };
        palette: {
            editor: {
                dark: string;
                main: string;
                light: string;
            };
            primary: {
                main: "#3f51b5";
            };
            secondary: {
                main: "#212121";
            };
            accent: {
                main: "#212121";
                light: "#424242";
                contrastText: "#fafafa";
            };
            success: {
                main: "#4caf50";
            };
            error: {
                main: "#e91e63";
            };
            warning: {
                main: "#ff9800";
            };
            text: {
                primary: string;
                secondary: "#212121";
            };
            background: {
                default: string;
                paper: string;
                light: string;
                dark: string;
            };
            grey: {
                dark: string;
                main: string;
                light: string;
            };
            active: {
                hover: string;
                selected: string;
            };
            divider: "#e0e0e0";
        };
        typography: {
            h1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                lineHeight: string;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            h2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            h3: {
                fontFamily: string;
                fontWeight: number;
                textIndent: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
                lineHeight: string;
            };
            h4: {
                fontFamily: string;
                fontSize: number;
                fontWeight: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            h5: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
            };
            h6: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
            };
            subtitle1: {
                fontFamily: string;
                fontSize: number;
                fontWeight: number;
                lineHeight: string;
                textTransform: string;
            };
            subtitle2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                lineHeight: string;
            };
            body1: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            body2: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
                "@media (max-width:600px)": {
                    fontSize: number;
                };
            };
            button: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
            };
            caption: {
                fontFamily: string;
                fontWeight: number;
                fontSize: number;
                letterSpacing: string;
            };
            overline: {
                fontFamily: string;
                textTransform: string;
                fontWeight: number;
                fontSize: number;
                letterSpacing: string;
            };
        };
        shape: {
            borderRadius: number;
        };
        spacing: number;
    }>>;
};
export default useTheme;
