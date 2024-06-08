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
var components_1 = require("../../../components");
var FieldImage = function (props) {
    var label = props.label, value = props.value, _a = props.height, height = _a === void 0 ? 140 : _a, width = props.width, color = props.color, _b = props.objectFit, objectFit = _b === void 0 ? 'cover' : _b, rest = __rest(props, ["label", "value", "height", "width", "color", "objectFit"]);
    if (!value)
        return null;
    return (react_1.default.createElement(components_1.FieldWrapper, __assign({ color: color, label: label }, rest),
        react_1.default.createElement(material_1.Box, { sx: {
                height: height,
                width: width ? width : undefined,
            } },
            react_1.default.createElement(components_1.Image, { src: (value === null || value === void 0 ? void 0 : value.url) || value, height: height, objectFit: objectFit }))));
};
exports.default = FieldImage;
var sx = {
    imageContainer: {
        borderRadius: 1,
        height: 140,
        width: 140,
        overflow: 'none',
    },
};
