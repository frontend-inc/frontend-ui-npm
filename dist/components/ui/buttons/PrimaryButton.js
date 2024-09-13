"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var PrimaryButton = function (props) {
    var _a = props.color, color = _a === void 0 ? 'primary' : _a, loading = props.loading, children = props.children, onClick = props.onClick, _b = props.size, size = _b === void 0 ? 'medium' : _b, icon = props.icon, endIcon = props.endIcon, fullWidth = props.fullWidth, _c = props.disabled, disabled = _c === void 0 ? false : _c;
    return (react_1.default.createElement(material_1.Button, { fullWidth: fullWidth, color: color, variant: "contained", onClick: onClick, disabled: disabled, size: size, endIcon: endIcon && (react_1.default.createElement(components_1.Icon, { name: endIcon, color: color == 'primary'
                ? 'primary.contrastText'
                : 'secondary.contrastText' })), startIcon: react_1.default.createElement(react_1.default.Fragment, null,
            loading && react_1.default.createElement(components_1.IconLoading, { loading: loading }),
            icon && (react_1.default.createElement(components_1.Icon, { name: icon, color: color == 'primary'
                    ? 'primary.contrastText'
                    : 'secondary.contrastText' }))) }, children));
};
exports.default = PrimaryButton;
