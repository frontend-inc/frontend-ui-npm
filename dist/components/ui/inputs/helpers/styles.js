"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sx = void 0;
exports.sx = {
    inputBase: {
        p: 0,
        color: 'text.secondary',
        width: '100%',
        '& input, & .MuiInputBase-inputMultiline': {
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            p: 1,
            borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
            fontSize: function (theme) { return theme.typography.body2.fontSize; },
            fontFamily: function (theme) { return theme.typography.body2.fontFamily; },
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            '&:focus': {
                borderColor: 'primary.main',
            },
        },
    },
    inputError: {
        '& input, & .MuiInputBase-inputMultiline': {
            p: 1,
            borderRadius: 1,
            border: '2px solid',
            borderColor: 'error.main',
        },
    },
    inputContainer: {
        width: '100%',
    },
    paper: {
        bgcolor: 'background.default',
        mt: 1,
        color: 'text.secondary',
        fontSize: 15,
    },
    option: {
        minHeight: 'auto',
        alignItems: 'flex-start',
        p: 8,
        '&[aria-selected="true"]': {
            bgcolor: 'transparent',
        },
        '&[data-focus="true"]': {
            bgcolor: 'action.hover',
        },
    },
    popperDisablePortal: {
        position: 'relative',
    },
    label: {
        minWidth: '100px',
    },
    stack: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    stackVertical: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
};
exports.default = exports.sx;
