export declare const muiTheme: {
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
                root: {};
            };
        };
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    fontFamily: string;
                };
                deletable: {
                    '&:focus': {};
                };
            };
        };
        MuiButton: {
            defaultProps: {
                disableRipple: boolean;
                disableElevation: boolean;
            };
            styleOverrides: {
                root: {
                    whiteSpace: string;
                };
                sizeSmall: {};
                sizeLarge: {};
                outlined: {};
                contained: {};
            };
        };
        MuiButtonGroup: {
            defaultProps: {
                disableRipple: boolean;
                border: string;
                disableElevation: boolean;
            };
            styleOverrides: {
                root: {
                    whiteSpace: string;
                };
                sizeSmall: {};
                sizeLarge: {};
                outlined: {};
                contained: {};
            };
        };
        MuiCardActions: {
            styleOverrides: {
                root: {};
            };
        };
        MuiCardContent: {
            styleOverrides: {
                root: {};
            };
        };
        MuiCardHeader: {
            styleOverrides: {
                root: {};
            };
        };
        MuiChip: {
            styleOverrides: {
                root: {};
                deletable: {
                    '&:focus': {};
                };
            };
        };
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    fontFamily: string;
                    '& .MuiInputBase-root': {
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
                root: {};
            };
        };
        MuiIconButton: {
            styleOverrides: {
                root: {};
            };
        };
        MuiInputBase: {
            styleOverrides: {
                root: {};
                input: {};
            };
        };
        MuiLinearProgress: {
            styleOverrides: {
                root: {};
                colorPrimary: {};
            };
        };
        MuiListItem: {
            styleOverrides: {
                button: {};
            };
        };
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: string;
                };
            };
        };
        MuiOutlinedInput: {
            styleOverrides: {
                root: {};
                notchedOutline: {};
            };
        };
        MuiPaper: {
            styleOverrides: {
                root: {};
            };
        };
        MuiSkeleton: {
            styleOverrides: {
                root: {};
            };
        };
        MuiRadio: {
            styleOverrides: {
                root: {};
                input: {
                    '&::placeholder': {
                        color: "#424242";
                    };
                };
            };
        };
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: string;
                    fontFamily: string;
                    textTransform: string;
                    fontWeight: number;
                    fontSize: number;
                    '@media (max-width:600px)': {
                        fontSize: number;
                    };
                };
            };
        };
        MuiTableHead: {
            styleOverrides: {
                root: {
                    width: string;
                };
            };
        };
        MuiTableRow: {
            styleOverrides: {
                root: {};
            };
        };
        MuiToggleButton: {
            styleOverrides: {
                root: {};
            };
        };
        MuiTypography: {
            styleOverrides: {};
        };
    };
    palette: {
        editor: {
            dark: string;
            main: string;
            light: string;
        };
        primary: {
            main: "#212121";
        };
        secondary: {
            main: "#eeeeee";
            contrastText: "#424242";
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
            secondary: "#424242";
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
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        h2: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        h3: {
            fontFamily: string;
            fontWeight: number;
            textIndent: number;
            fontSize: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
            lineHeight: string;
        };
        h4: {
            fontFamily: string;
            fontSize: number;
            fontWeight: number;
            '@media (max-width:600px)': {
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
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        body2: {
            fontFamily: string;
            textTransform: string;
            fontWeight: number;
            fontSize: number;
            '@media (max-width:600px)': {
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
            textTransform: string;
            fontSize: number;
            letterSpacing: string;
        };
        overline: {
            fontFamily: string;
            fontWeight: number;
            textTransform: string;
            fontSize: number;
            lineHeight: string;
            letterSpacing: string;
        };
    };
    shape: {
        borderRadius: number;
    };
    spacing: number;
};
