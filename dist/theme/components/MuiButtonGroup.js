"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    defaultProps: {
        disableRipple: true,
        border: 'none !important',
    },
    styleOverrides: {
        root: {
            whiteSpace: 'nowrap',
            boxShadow: '0px 1px 1px 0 rgba(0,0,0,0.2)',
        },
        sizeSmall: {
            boxShadow: '0px 1px 1px 0 rgba(0,0,0,0.2)',
        },
        sizeLarge: {},
        outlined: {},
        contained: {},
    },
};
