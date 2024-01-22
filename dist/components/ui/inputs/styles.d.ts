export declare const sx: {
    inputBase: {
        p: number;
        color: string;
        width: string;
        "& input, & .MuiInputBase-inputMultiline": {
            WebkitAppearance: string;
            MozAppearance: string;
            appearance: string;
            p: number;
            borderRadius: (theme: any) => string;
            fontSize: (theme: any) => any;
            fontFamily: (theme: any) => any;
            bgcolor: string;
            border: string;
            borderColor: string;
            m: string;
            "&:focus": {
                m: string;
                boxShadow: string;
                border: string;
                borderColor: string;
            };
        };
    };
    inputError: {
        "& input, & .MuiInputBase-inputMultiline": {
            p: number;
            borderRadius: (theme: any) => string;
            border: string;
            borderColor: string;
        };
    };
    paper: {
        bgcolor: string;
        mt: number;
        color: string;
        fontSize: number;
    };
    option: {
        minHeight: string;
        alignItems: string;
        p: number;
        '&[aria-selected="true"]': {
            bgcolor: string;
        };
        '&[data-focus="true"]': {
            bgcolor: string;
        };
    };
    popperDisablePortal: {
        position: string;
    };
    label: {
        mb: number;
        minWidth: string;
    };
    stack: {
        alignItems: string;
    };
    stackVertical: {
        alignItems: string;
    };
};
export default sx;
