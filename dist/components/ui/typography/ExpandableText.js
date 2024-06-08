"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var MAX_CHARS = 200;
var ExpandableText = function (props) {
    var _a = props || {}, text = _a.text, _b = _a.maxChars, maxChars = _b === void 0 ? MAX_CHARS : _b;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
        open ? (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, text)) : (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, text === null || text === void 0 ? void 0 : text.slice(0, maxChars))),
        (text === null || text === void 0 ? void 0 : text.length) > maxChars && (react_1.default.createElement(material_1.Link, { onClick: function () { return setOpen(!open); }, sx: sx.link }, open ? 'See less' : '... See all'))));
};
exports.default = ExpandableText;
var sx = {
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    link: {
        cursor: 'pointer',
        color: 'text.secondary',
    },
};
