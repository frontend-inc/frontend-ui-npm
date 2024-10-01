"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var Logo = function (props) {
    var _a = props.src, src = _a === void 0 ? null : _a, _b = props.height, height = _b === void 0 ? 50 : _b, _c = props.width, width = _c === void 0 ? 120 : _c, _d = props.alt, alt = _d === void 0 ? 'Logo' : _d;
    var theme = (0, material_1.useTheme)();
    return src ? (react_1.default.createElement(image_1.default, { src: src, alt: alt, height: height, width: width, style: {
            minHeight: "".concat(height, "px"),
            objectFit: 'contain',
            borderRadius: theme.shape.borderRadius,
        } })) : (react_1.default.createElement(components_1.NoImage, { height: height }));
};
exports.default = Logo;
