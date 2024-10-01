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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Avatar = function (props) {
    var src = props.src, _a = props.color, color = _a === void 0 ? '#333333' : _a, label = props.label, _b = props.variant, variant = _b === void 0 ? 'rounded' : _b, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.size, size = _e === void 0 ? 40 : _e;
    return (react_1.default.createElement(material_1.Avatar, { src: src, variant: variant, sx: __assign(__assign(__assign(__assign({}, sx.avatar), { height: size, width: size, bgcolor: src ? 'common.white' : color }), (enableGradient && sx.gradient)), (enableOverlay && sx.overlay)) }, label ? (react_1.default.createElement(material_1.Typography, { variant: "button", color: "background.default", sx: sx.label }, label)) : (react_1.default.createElement(material_1.Box, null))));
};
exports.default = Avatar;
var sx = {
    avatar: {
        display: 'flex',
        pt: '2px',
        bgcolor: 'secondary.main',
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.3), transparent)',
        },
    },
    label: {
        textTransform: 'uppercase',
    },
};
