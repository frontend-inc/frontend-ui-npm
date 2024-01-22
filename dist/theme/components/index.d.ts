declare const _default: {
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
export default _default;
