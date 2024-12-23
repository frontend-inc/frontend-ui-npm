'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var ListFields = function (props) {
    var _a = props || {}, className = _a.className, fields = _a.fields, resource = _a.resource;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col space-y-2', className) }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) { return (react_1.default.createElement(__1.ListField, { key: index, field: field, resource: resource })); })));
};
exports.default = ListFields;
