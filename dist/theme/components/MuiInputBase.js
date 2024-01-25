"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var palette_1 = require("../palette");
exports.default = {
    styleOverrides: {
        root: {},
        input: {
            '&::placeholder': {
                opacity: 1,
                color: palette_1.palette.text.secondary,
            },
        },
    },
};
