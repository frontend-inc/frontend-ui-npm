'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var CartButton = function (props) {
    var _a = props.icon, icon = _a === void 0 ? 'ri-shopping-bag-2-line' : _a;
    var _b = (0, hooks_1.useCart)(), cart = _b.cart, cartOpen = _b.cartOpen, setCartOpen = _b.setCartOpen;
    return (react_1.default.createElement("div", { className: "relative" },
        react_1.default.createElement(components_1.IconButton, { onClick: function () { return setCartOpen(!cartOpen); } },
            react_1.default.createElement(components_2.RemixIcon, { name: icon, size: "lg" })),
        react_1.default.createElement(frontend_shadcn_1.Badge, { className: "py-0 px-1 rounded-full absolute top-0 right-0 transform translate-x-[3px] -translate-y-[3px]" }, cart === null || cart === void 0 ? void 0 : cart.total_items)));
};
exports.default = CartButton;
