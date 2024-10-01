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
var __1 = require("../..");
var router_1 = require("next/router");
var ButtonAction = function (props) {
    var children = props.children, icon = props.icon, url = props.url, path = props.path, _a = props.color, color = _a === void 0 ? 'secondary' : _a, _b = props.variant, variant = _b === void 0 ? 'contained' : _b, _c = props.size, size = _c === void 0 ? 'medium' : _c, rest = __rest(props, ["children", "icon", "url", "path", "color", "variant", "size"]);
    var router = (0, router_1.useRouter)();
    var handleClick = function () {
        if (url) {
            window.open(url, '_blank');
        }
        else if (path) {
            router.push(path);
        }
    };
    return (react_1.default.createElement(material_1.Button, __assign({ fullWidth: true, sx: sx.button, size: size, startIcon: react_1.default.createElement(react_1.default.Fragment, null, icon && (react_1.default.createElement(__1.Icon, { name: icon, color: color == 'primary'
                ? 'primary.contrastText'
                : 'secondary.contrastText' }))), onClick: handleClick, variant: variant, color: color }, rest), children));
};
exports.default = ButtonAction;
var sx = {
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
};
