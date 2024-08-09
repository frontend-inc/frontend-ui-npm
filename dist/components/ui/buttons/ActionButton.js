"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var ActionButton = function (props) {
    var button = props.button, resource = props.resource, rest = __rest(props, ["button", "resource"]);
    var _a = button || {}, icon = _a.icon, _b = _a.label, label = _b === void 0 ? 'View' : _b;
    var handleClick = (0, hooks_1.useButtons)({
        button: button,
        resource: resource,
    }).handleClick;
    var onClick = function (ev) {
        handleClick(ev);
    };
    return (react_1.default.createElement(material_1.Button, __assign({ fullWidth: true, sx: sx.button, startIcon: icon && (react_1.default.createElement(__1.Icon, { name: icon, size: 20, color: (button === null || button === void 0 ? void 0 : button.color) == 'primary'
                ? 'primary.contrastText'
                : 'secondary.contrastText' })), onClick: onClick, variant: (button === null || button === void 0 ? void 0 : button.variant) || 'contained', color: (button === null || button === void 0 ? void 0 : button.color) || 'secondary' }, rest), label));
};
exports.default = ActionButton;
var sx = {
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
};
