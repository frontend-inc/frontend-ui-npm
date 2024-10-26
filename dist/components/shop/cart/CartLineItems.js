'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var CartLineItem_1 = __importDefault(require("./CartLineItem"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var CartLineItems = function () {
    var cart = (0, hooks_1.useCart)().cart;
    if (!(cart === null || cart === void 0 ? void 0 : cart.uid))
        return null;
    if ((cart === null || cart === void 0 ? void 0 : cart.line_items.length) === 0) {
        return (react_1.default.createElement(components_1.Placeholder, { icon: "ShoppingBag", title: "Your cart is empty", description: "There are no products in the cart." }));
    }
    return (react_1.default.createElement(core_1.List, null, cart === null || cart === void 0 ? void 0 : cart.line_items.map(function (lineItem) { return (react_1.default.createElement(CartLineItem_1.default, { key: lineItem.id, lineItem: lineItem })); })));
};
exports.default = CartLineItems;
