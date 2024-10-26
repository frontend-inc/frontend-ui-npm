'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var DisplayMetafields = function (props) {
    var _a = props || {}, fields = _a.fields, resource = _a.resource;
    return (react_1.default.createElement("div", { className: "flex flex-col" }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) { return (react_1.default.createElement(__1.DisplayMetafield, { key: index, field: field, resource: resource, disablePadding: true })); })));
};
exports.default = DisplayMetafields;
