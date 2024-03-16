"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CheckboxFilterList = function (props) {
    var _a;
    var _b = props.filters, filters = _b === void 0 ? [] : _b, option = props.option, handleClick = props.handleClick;
    var values = filters.map(function (f) { return f.value; });
    var handleFilterClick = function (value) {
        handleClick({
            name: option.name,
            value: value
        });
    };
    if (!option || !(typeof (option === null || option === void 0 ? void 0 : option.value) == 'object'))
        return null;
    return (react_1.default.createElement(material_1.List, { disablePadding: true }, (_a = option === null || option === void 0 ? void 0 : option.value) === null || _a === void 0 ? void 0 : _a.map(function (option, index) { return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, key: index },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleFilterClick(option); } },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(material_1.Checkbox, { checked: values === null || values === void 0 ? void 0 : values.includes(option), color: "primary" })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button", color: 'text.primary' }, option) })))); })));
};
exports.default = CheckboxFilterList;
var sx = {
    listItemButton: {
        py: 0
    }
};
