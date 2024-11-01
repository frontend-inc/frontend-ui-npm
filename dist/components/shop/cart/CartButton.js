'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var CartButton = function (props) {
    var _a = props.icon, icon = _a === void 0 ? 'ShoppingBag' : _a;
    var _b = (0, hooks_1.useCart)(), cart = _b.cart, cartOpen = _b.cartOpen, setCartOpen = _b.setCartOpen;
    return (react_1.default.createElement(core_1.IconButton, { onClick: function () { return setCartOpen(!cartOpen); } },
        react_1.default.createElement(core_1.Badge, { badgeContent: cart === null || cart === void 0 ? void 0 : cart.total_items },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24 }))));
};
exports.default = CartButton;
