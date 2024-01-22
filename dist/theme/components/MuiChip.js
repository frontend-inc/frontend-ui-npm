"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("../../theme");
var theme_2 = require("../../theme");
exports.default = {
    styleOverrides: {
        root: {
            bgcolor: theme_2.palette.background.paper,
            fontFamily: theme_1.typography.body2.fontFamily,
        },
        deletable: {
            "&:focus": {},
        },
    },
};
