'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var FULL_WIDTH_VARIANTS = ['text', 'image', 'url'];
var Details = function (props) {
    var resource = props.resource, displayFields = props.displayFields, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a;
    return (react_1.default.createElement("div", { className: "w-full grid" }, document &&
        (displayFields === null || displayFields === void 0 ? void 0 : displayFields.map(function (field, i) { return (react_1.default.createElement("div", { key: i, className: (0, frontend_shadcn_1.cn)('grid-span-1', FULL_WIDTH_VARIANTS.includes(field === null || field === void 0 ? void 0 : field.variant)
                ? 'sm:grid-span-3'
                : 'sm:grid-span-1') },
            react_1.default.createElement(__1.Field, { field: field, enableBorder: enableBorder, resource: resource }))); }))));
};
exports.default = Details;
