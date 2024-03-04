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
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var Image = function (props) {
    var _a = props.src, src = _a === void 0 ? null : _a, height = props.height, _b = props.objectFit, objectFit = _b === void 0 ? 'cover' : _b, _c = props.enableBorder, enableBorder = _c === void 0 ? false : _c, _d = props.alt, alt = _d === void 0 ? 'image' : _d, _e = props.bgcolor, bgcolor = _e === void 0 ? '#000000' : _e, _f = props.opacity, opacity = _f === void 0 ? 0.5 : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.enableGradient, enableGradient = _h === void 0 ? false : _h, _j = props.disableBorderRadius, disableBorderRadius = _j === void 0 ? false : _j;
    var theme = (0, material_1.useTheme)();
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), { height: "".concat(height, "px"), borderRadius: !disableBorderRadius && theme.shape.borderRadius, '&::after': __assign(__assign(__assign(__assign(__assign(__assign({}, sx.afterBase), (enableOverlay && sx.overlay)), (!enableOverlay && enableGradient && sx.gradient)), (!enableOverlay && !disableBorderRadius && enableGradient && sx.gradientBorderRadius)), (enableBorder && sx.border)), { bgcolor: bgcolor, opacity: opacity }) }) }, src ? (react_1.default.createElement(image_1.default, { src: src, alt: alt, height: 1600, width: 1600, style: {
            height: "".concat(height, "px"),
            minHeight: "".concat(height, "px"),
            objectFit: objectFit,
            borderRadius: !disableBorderRadius ? theme.shape.borderRadius : 0,
        }, layout: 'responsive' })) : (react_1.default.createElement(components_1.NoImage, { height: height }))));
};
exports.default = Image;
var sx = {
    root: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    afterBase: {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'transparent',
        opacity: 0,
    },
    overlay: {
        height: '100%',
    },
    gradient: {
        height: '50%',
        background: 'linear-gradient(to top, rgb(0,0,0,1.0), transparent)',
    },
    gradientBorderRadius: {
        height: '50%',
        background: 'linear-gradient(to top, rgb(0,0,0,1.0), transparent)',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    border: {
        border: '1px solid',
        borderColor: 'divider',
    },
};
