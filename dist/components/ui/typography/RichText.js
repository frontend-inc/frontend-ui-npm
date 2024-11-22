'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var RichText = function (props) {
    var _a = props || {}, html = _a.html, editable = _a.editable, handleChange = _a.handleChange;
    return !editable ? (react_1.default.createElement("div", { className: "w-full prose" },
        react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html } }))) : (react_1.default.createElement(components_1.HTMLEditor, { value: html, name: "html", handleChange: handleChange }));
};
exports.default = RichText;
