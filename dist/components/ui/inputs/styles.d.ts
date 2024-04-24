export declare const sx: {
    inputBase: {
        p: number;
        color: string;
        width: string;
        '& input, & .MuiInputBase-inputMultiline': {
            WebkitAppearance: string;
            MozAppearance: string;
            appearance: string;
            p: number;
            borderRadius: number;
            fontSize: (theme: any) => any;
            fontFamily: (theme: any) => any;
            bgcolor: string;
            border: string;
            borderColor: string;
            m: string;
            '&:focus': {
                m: string;
                boxShadow: string;
                border: string;
                borderColor: string;
            };
        };
    };
    inputError: {
        '& input, & .MuiInputBase-inputMultiline': {
            p: number;
            borderRadius: number;
            border: string;
            borderColor: string;
        };
    };
    inputContainer: {
        width: string;
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
        minWidth: string;
    };
    stack: {
        width: string;
        display: string;
        justifyContent: string;
        alignItems: string;
    };
    stackVertical: {
        justifyContent: string;
        alignItems: string;
    };
};
export default sx;
