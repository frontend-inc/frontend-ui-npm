"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CheckboxFilterList = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.options, options = _b === void 0 ? [] : _b, handleClick = props.handleClick;
    var values = filters.map(function (f) { return f.value; });
    return (react_1.default.createElement(material_1.List, { disablePadding: true }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, key: index },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleClick(option); } },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(material_1.Checkbox, { checked: values === null || values === void 0 ? void 0 : values.includes(option.value), color: "primary" })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button", color: 'text.primary' }, option.value) })))); })));
};
exports.default = CheckboxFilterList;
var sx = {
    listItemButton: {
        py: 0
    }
};
