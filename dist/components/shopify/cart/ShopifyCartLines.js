'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var ShopifyCartLines = function (props) {
    var _a;
    var cart = (0, frontend_shopify_1.useCart)().cart;
    var lines = ((_a = cart === null || cart === void 0 ? void 0 : cart.lines) === null || _a === void 0 ? void 0 : _a.edges.map(function (e) { return e.node; })) || [];
    return (react_1.default.createElement("ul", null, lines === null || lines === void 0 ? void 0 : lines.map(function (line) { return (react_1.default.createElement(shopify_1.ShopifyCartLine, { key: line.id, line: line })); })));
};
exports.default = ShopifyCartLines;
