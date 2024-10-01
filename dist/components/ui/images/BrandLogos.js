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
var image_1 = __importDefault(require("next/image"));
var BrandLogos = function (props) {
    var _a = props || {}, _b = _a.logos, logos = _b === void 0 ? [] : _b, _c = _a.height, height = _c === void 0 ? 48 : _c, _d = _a.width, width = _d === void 0 ? 128 : _d;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 3, sx: sx.logos }, logos.map(function (logo, i) { return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.logo), { height: height, maxWidth: width }) },
        react_1.default.createElement(image_1.default, { key: i, src: logo === null || logo === void 0 ? void 0 : logo.image, height: height, width: width, style: {
                objectFit: 'contain',
                height: height,
                width: width,
            }, layout: "responsive", alt: logo === null || logo === void 0 ? void 0 : logo.title }))); })));
};
exports.default = BrandLogos;
var sx = {
    logos: {
        alignItems: 'center',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        justifyContent: {
            sm: 'center',
            xs: 'flex-start',
        },
    },
    logo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    }
};
