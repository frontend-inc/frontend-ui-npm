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
var context_1 = require("../../../context");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
function ShopifyCartButton(props) {
    var _a = (props || {}).icon, icon = _a === void 0 ? 'ri-shopping-cart-2-line' : _a;
    var _b = (0, react_1.useContext)(frontend_shopify_1.ShopifyContext), cart = _b.cart, toggleCart = _b.toggleCart;
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var handleCartClick = function () {
        setMenuOpen(false);
        toggleCart();
    };
    return (react_1.default.createElement(react_3.Badge, { content: cart === null || cart === void 0 ? void 0 : cart.totalQuantity },
        react_1.default.createElement(react_2.Button, { isIconOnly: true, onPress: handleCartClick },
            react_1.default.createElement(components_1.RemixIcon, { name: icon, size: "lg" }))));
}
exports.default = ShopifyCartButton;
