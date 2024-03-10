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
var KlaviyoButton = function (props) {
    var _a = props || {}, formId = _a.formId, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'center' : _b, _c = _a.variant, variant = _c === void 0 ? 'contained' : _c, _d = _a.buttonText, buttonText = _d === void 0 ? 'Subscribe' : _d;
    var handleClick = function () {
        // @ts-ignore
        window._klOnsite = window._klOnsite || [];
        // @ts-ignore
        window._klOnsite.push(['openForm', 'Tpqv7M']);
    };
    if (!formId)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), { justifyContent: justifyContent }) },
        react_1.default.createElement(material_1.Button, { variant: variant, onClick: handleClick }, buttonText)));
};
exports.default = KlaviyoButton;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
};
