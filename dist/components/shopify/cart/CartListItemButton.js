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
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var context_1 = require("../../../context");
var CartListItemButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Cart' : _a, _b = props.editing, editing = _b === void 0 ? false : _b, _c = props.icon, icon = _c === void 0 ? 'ShoppingCart' : _c;
    var _d = (0, react_1.useContext)(frontend_shopify_1.ShopContext), cart = _d.cart, toggleCart = _d.toggleCart;
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var handleCartClick = function () {
        setMenuOpen(false);
        if (!editing) {
            toggleCart();
        }
    };
    return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.Badge, { badgeContent: cart === null || cart === void 0 ? void 0 : cart.totalQuantity, color: "primary", sx: sx.badge }) },
        react_1.default.createElement(material_1.ListItemButton, { onClick: handleCartClick },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, label) }))));
};
exports.default = CartListItemButton;
var sx = {
    badge: {
        mr: 1
    }
};
