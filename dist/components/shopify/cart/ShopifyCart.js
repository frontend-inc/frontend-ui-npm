'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var addons_1 = require("../../../hooks/addons");
var frontend_shopify_2 = require("frontend-shopify");
var __1 = require("../..");
var __2 = require("..");
var ShopifyCart = function (props) {
    var _a, _b;
    var _c = props.title, title = _c === void 0 ? 'Your Cart' : _c;
    var trackCartViewed = (0, addons_1.useSegment)().trackCartViewed;
    var _d = (0, react_1.useContext)(frontend_shopify_2.ShopifyContext), cartOpen = _d.cartOpen, toggleCart = _d.toggleCart;
    var cart = (0, frontend_shopify_1.useCart)().cart;
    (0, react_1.useEffect)(function () {
        if (cartOpen && cart) {
            trackCartViewed(cart);
        }
    }, [cartOpen, cart]);
    return (react_1.default.createElement(__1.Sheet, { side: "right", open: cartOpen, handleClose: toggleCart, title: title, buttons: react_1.default.createElement(__2.ShopifyCheckoutButton, null) }, ((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.lines) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (react_1.default.createElement("div", { className: "flex flex-col justify-between h-full" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
            react_1.default.createElement(__2.ShopifyCartLines, null),
            react_1.default.createElement(__2.ShopifyCartDiscounts, null)),
        react_1.default.createElement(__2.ShopifyCartTotals, null))) : (react_1.default.createElement("div", { className: "h-1/2 flex flex-col justify-center items-center" },
        react_1.default.createElement(__1.Empty, { icon: "ri-shopping-cart-2-fill", title: "Your cart is empty", description: "Continue shopping to add items to your cart" })))));
};
exports.default = ShopifyCart;
