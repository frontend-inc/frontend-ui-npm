'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var FieldArray = function (props) {
    var values = props.value, label = props.label, className = props.className, direction = props.direction;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, direction: direction },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)("flex flex-row gap-2", className) }, Array.isArray(values) &&
            (values === null || values === void 0 ? void 0 : values.map(function (value, index) { return (react_1.default.createElement(frontend_shadcn_1.Badge, { variant: "secondary", className: "px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap truncate", key: index }, value)); })))));
};
exports.default = FieldArray;
