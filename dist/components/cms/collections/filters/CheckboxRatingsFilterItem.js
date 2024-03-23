"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CheckboxRatingsFilterItem = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, option = props.option, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, disablePadding: true },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(material_1.Checkbox, { checked: values.includes(option.value), color: "primary" })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Rating, { readOnly: true, size: "small", sx: sx.rating, value: Number(option === null || option === void 0 ? void 0 : option.value) }) }))));
};
exports.default = CheckboxRatingsFilterItem;
var sx = {
    listItemButton: {
        p: 0,
    },
    rating: {
        color: 'primary.main',
    },
};
