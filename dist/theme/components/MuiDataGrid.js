"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("../../theme");
exports.default = {
    styleOverrides: {
        root: {
            fontFamily: theme_1.typography.body2.fontFamily,
            '& .MuiInputBase-root': {
                fontFamily: theme_1.typography.body2.fontFamily,
            },
        },
    },
};
