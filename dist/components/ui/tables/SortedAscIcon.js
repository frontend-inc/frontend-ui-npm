"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var icons_material_1 = require("@mui/icons-material");
var SortedAscendingIcon = function () {
    return react_1.default.createElement(icons_material_1.ExpandLess, { sx: sx.sortIcon });
};
exports.default = SortedAscendingIcon;
var sx = {
    sortIcon: {
        color: "text.secondary",
    },
};
