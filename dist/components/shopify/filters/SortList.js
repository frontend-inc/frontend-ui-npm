"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var SortList = function (props) {
    var _a = props || {}, value = _a.value, reverse = _a.reverse, options = _a.options, handleClick = _a.handleClick;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(material_1.MenuItem, { key: index, disableGutters: true, selected: option.value === value && option.reverse === reverse, onClick: function () { return handleClick(option === null || option === void 0 ? void 0 : option.value, option === null || option === void 0 ? void 0 : option.reverse); } },
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
            react_1.default.createElement(material_1.Radio, { checked: option.value == value && option.reverse == reverse, onChange: function () { return handleClick(option === null || option === void 0 ? void 0 : option.value, option === null || option === void 0 ? void 0 : option.reverse); } })),
        react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button" }, option === null || option === void 0 ? void 0 : option.label) }))); })));
};
exports.default = SortList;
var sx = {
    root: {
        width: "100%",
    },
    icon: {
        color: "primary.main",
        height: "20px",
        width: "20px",
    },
    listItemIcon: {
        justifyContent: "center",
    },
};
