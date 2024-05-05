"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CheckboxFilterItem = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, option = props.option, handleClick = props.handleClick;
    console.log("VALUES", values);
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, disablePadding: true },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(material_1.Checkbox, { checked: values.includes(option.value), color: "primary" })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "button" }, option === null || option === void 0 ? void 0 : option.label) }))));
};
exports.default = CheckboxFilterItem;
var sx = {
    listItemButton: {
        p: 0,
    },
    listItemIcon: {
        mr: 2
    }
};
