"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var CartTotals = function () {
    var cart = (0, hooks_1.useCart)().cart;
    if ((cart === null || cart === void 0 ? void 0 : cart.total_items) === 0)
        return null;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, direction: "row", justifyContent: 'space-between' },
        react_1.default.createElement(material_1.Typography, { variant: "caption" }, "Subtotal"),
        react_1.default.createElement(material_1.Typography, { variant: "subtitle2" }, cart === null || cart === void 0 ? void 0 : cart.display_subtotal)));
};
exports.default = CartTotals;
