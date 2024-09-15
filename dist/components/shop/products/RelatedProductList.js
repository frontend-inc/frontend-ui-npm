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
var RelatedProductList = function (props) {
    var resource = props.resource;
    var url = "/shop/products/".concat(resource === null || resource === void 0 ? void 0 : resource.id, "/related_products");
    return (react_1.default.createElement(__1.ProductList, __assign({}, props, { url: url, resource: resource, list: __1.RelatedProductListItems })));
};
exports.default = RelatedProductList;
