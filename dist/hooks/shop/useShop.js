"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useShop = function () {
    var _a = (0, react_1.useContext)(context_1.ShopContext), cartCookie = _a.cartCookie, cart = _a.cart, setCart = _a.setCart, cartOpen = _a.cartOpen, setCartOpen = _a.setCartOpen;
    return {
        cart: cart,
        setCart: setCart,
        cartOpen: cartOpen,
        setCartOpen: setCartOpen,
        cartCookie: cartCookie
    };
};
exports.default = useShop;
