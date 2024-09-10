"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var CartLineItems_1 = __importDefault(require("./CartLineItems"));
var CheckoutButton_1 = __importDefault(require("./CheckoutButton"));
var Cart = function () {
    var _a = (0, hooks_1.useCart)(), cartOpen = _a.cartOpen, setCartOpen = _a.setCartOpen;
    return (react_1.default.createElement(components_1.Drawer, { open: cartOpen, handleClose: function () { return setCartOpen(false); }, title: "My Cart", buttons: react_1.default.createElement(CheckoutButton_1.default, null) },
        react_1.default.createElement(CartLineItems_1.default, null)));
};
exports.default = Cart;
