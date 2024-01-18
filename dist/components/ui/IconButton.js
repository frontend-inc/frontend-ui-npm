"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ButtonIcon = function (props) {
    var onClick = props.onClick, Icon = props.icon, _a = props.size, size = _a === void 0 ? 24 : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b;
    return (react_1.default.createElement(material_1.IconButton, { onClick: onClick, disabled: disabled },
        react_1.default.createElement(Icon, { sx: {
                height: size,
                width: size,
            } })));
};
exports.default = ButtonIcon;
