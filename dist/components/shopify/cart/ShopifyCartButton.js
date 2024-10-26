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
var core_1 = require("../../core");
function ShopifyCartButton(_a) {
    var _b = _a.icon, icon = _b === void 0 ? 'ShoppingCart' : _b;
    var _c = (0, react_1.useContext)(frontend_shopify_1.ShopifyContext), cart = _c.cart, toggleCart = _c.toggleCart;
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var handleCartClick = function () {
        setMenuOpen(false);
        toggleCart();
    };
    return (react_1.default.createElement(core_1.IconButton, { onClick: handleCartClick },
        react_1.default.createElement(core_1.Badge, { badgeContent: cart === null || cart === void 0 ? void 0 : cart.totalQuantity },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24 }))));
}
exports.default = ShopifyCartButton;
