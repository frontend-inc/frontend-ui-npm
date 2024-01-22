"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("../../theme");
exports.default = {
  styleOverrides: {
    root: {
      width: "100%",
      // @ts-ignore
      bgcolor: theme_1.palette.primary.contrastText,
    },
  },
};
