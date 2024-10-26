'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ProductEmpty = function (props) {
    var resources = (0, frontend_js_1.useResourceContext)().resources;
    var _a = props || {}, _b = _a.icon, icon = _b === void 0 ? 'ShoppingCart' : _b, _c = _a.title, title = _c === void 0 ? 'No products' : _c, _d = _a.description, description = _d === void 0 ? 'No products available.' : _d;
    if ((resources === null || resources === void 0 ? void 0 : resources.length) > 0)
        return null;
    return react_1.default.createElement(__1.Placeholder, { icon: icon, title: title, description: description });
};
exports.default = ProductEmpty;
