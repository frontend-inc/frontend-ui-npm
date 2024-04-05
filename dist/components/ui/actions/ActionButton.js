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
var ActionButton = function (props) {
    var color = props.color, _a = props.variant, variant = _a === void 0 ? 'contained' : _a, action = props.action, resource = props.resource, rest = __rest(props, ["color", "variant", "action", "resource"]);
    var _b = action || {}, icon = _b.icon, _c = _b.label, label = _c === void 0 ? 'View' : _c;
    var handleClick = (0, hooks_1.useActions)({
        action: action,
        resource: resource
    }).handleClick;
    var onClick = function (ev) {
        handleClick(ev);
    };
    return (react_1.default.createElement(material_1.Button, __assign({ onClick: onClick, variant: variant, color: color }, rest), label));
};
exports.default = ActionButton;
