"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CheckboxFilterList = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, options = props.options, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Box, null, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(material_1.MenuItem, { key: index, onClick: function () { return handleClick(option); } },
        react_1.default.createElement(material_1.ListItemIcon, null,
            react_1.default.createElement(material_1.Checkbox, { checked: values === null || values === void 0 ? void 0 : values.includes(option), color: "primary" })),
        react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button" }, option) }))); })));
};
exports.default = CheckboxFilterList;
