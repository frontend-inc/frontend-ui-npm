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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ProductContainer = function (props) {
    var _a = props || {}, url = _a.url, foreignUrl = _a.foreignUrl, _b = _a.fields, fields = _b === void 0 ? [] : _b, product = _a.product;
    return (react_1.default.createElement(frontend_js_1.ResourceProvider, { name: "product", resource: product, url: url, foreignUrl: foreignUrl },
        react_1.default.createElement(__1.ProductDetails, __assign({}, props, { url: url })),
        react_1.default.createElement(__1.ProductForm, { fields: fields })));
};
exports.default = ProductContainer;
