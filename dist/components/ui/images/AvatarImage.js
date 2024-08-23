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
var AvatarImage = function (props) {
    var image = props.image, alt = props.alt, _a = props.height, height = _a === void 0 ? 64 : _a, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c, _d = props.slots, slots = _d === void 0 ? {
        image: {}
    } : _d;
    return (react_1.default.createElement(material_1.Avatar, __assign({ sx: __assign(__assign(__assign(__assign({}, sx.avatar), (enableGradient && sx.gradient)), (enableOverlay && sx.overlay)), { height: "".concat(height, "px"), width: "".concat(height, "px") }), src: image, alt: alt }, slots.image),
        react_1.default.createElement(material_1.Box, null)));
};
exports.default = AvatarImage;
var sx = {
    avatar: {
        height: '64px',
        width: '64px',
        backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
};
