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
var script_1 = __importDefault(require("next/script"));
var material_1 = require("@mui/material");
var Typeform = function (props) {
    var typeformId = props.typeformId, _a = props.justifyContent, justifyContent = _a === void 0 ? 'center' : _a;
    if (!typeformId)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), { justifyContent: justifyContent }) },
        react_1.default.createElement("div", { "data-tf-live": typeformId }),
        react_1.default.createElement(script_1.default, { src: "//embed.typeform.com/next/embed.js" })));
};
exports.default = Typeform;
var sx = {
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
};
