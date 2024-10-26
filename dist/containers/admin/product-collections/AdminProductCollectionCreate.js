'use client';
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminProductForm = function (props) {
    var _a = (props || {}).metafields, metafields = _a === void 0 ? [] : _a;
    var fields = __spreadArray([
        { label: 'Image', name: 'image', variant: 'image' },
        { label: 'Handle', name: 'handle', variant: 'string' },
        { label: 'Title', name: 'title', variant: 'string' },
        { label: 'Description', name: 'description', variant: 'text' },
        { label: 'Label', name: 'label', variant: 'string' }
    ], metafields, true);
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields }));
};
exports.default = AdminProductForm;
