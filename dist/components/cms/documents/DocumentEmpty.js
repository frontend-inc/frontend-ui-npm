'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var DocumentEmpty = function (props) {
    var resources = (0, frontend_js_1.useResourceContext)().resources;
    var _a = props || {}, icon = _a.icon, title = _a.title, description = _a.description;
    if ((resources === null || resources === void 0 ? void 0 : resources.length) > 0)
        return null;
    return (react_1.default.createElement("div", { className: "p-2 w-full flex justify-center items-center" },
        react_1.default.createElement(__1.Empty, { icon: icon, title: title, description: description })));
};
exports.default = DocumentEmpty;
