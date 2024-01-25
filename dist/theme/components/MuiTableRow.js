"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var palette_1 = require("../palette");
exports.default = {
    styleOverrides: {
        root: {
            '&$selected': {
                bgcolor: palette_1.palette.background.default,
            },
            '&$hover': {
                '&:hover': {
                    bgcolor: palette_1.palette.background.default,
                },
            },
        },
    },
};
