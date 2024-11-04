'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var link_1 = __importDefault(require("next/link"));
var FieldFile = function (props) {
    var value = props.value, label = props.label;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label },
        react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
            react_1.default.createElement(components_1.Icon, { name: "File" }),
            (value === null || value === void 0 ? void 0 : value.content_type) && (react_1.default.createElement(link_1.default, { href: (value === null || value === void 0 ? void 0 : value.url) || '#' }, value === null || value === void 0 ? void 0 : value.content_type)))));
};
exports.default = FieldFile;
