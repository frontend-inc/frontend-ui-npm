"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var webstudio_shopify_1 = require("webstudio-shopify");
var material_1 = require("@mui/material");
var shopify_1 = require("../../../components/shopify");
var CartLines = function (props) {
    var _a;
    var cart = (0, webstudio_shopify_1.useCart)().cart;
    var lines = ((_a = cart === null || cart === void 0 ? void 0 : cart.lines) === null || _a === void 0 ? void 0 : _a.edges.map(function (e) { return e.node; })) || [];
    return (react_1.default.createElement(material_1.List, { sx: sx.root, disablePadding: true }, lines === null || lines === void 0 ? void 0 : lines.map(function (line) { return (react_1.default.createElement(shopify_1.CartLine, { key: line.id, line: line })); })));
};
exports.default = CartLines;
var sx = {
    root: {
        width: '100%',
    },
    empty: {
        textAlign: 'center',
    },
};
