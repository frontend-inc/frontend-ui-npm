declare const _default: {
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
export default _default;
