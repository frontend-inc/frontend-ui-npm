"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var palette_1 = require("../palette");
exports.default = {
    styleOverrides: {
        root: {},
        input: {
            '&::placeholder': {
                color: palette_1.palette.text.secondary,
            },
        },
    },
};
