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
var material_2 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var context_1 = require("../../../context");
var components_1 = require("../../../components");
var SideNavCartButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Cart' : _a, totalQuantity = props.totalQuantity, handleClick = props.handleClick;
    return (react_1.default.createElement(material_2.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.Badge, { badgeContent: totalQuantity, color: "primary", sx: sx.badge }) },
        react_1.default.createElement(material_2.ListItemButton, { onClick: handleClick },
            react_1.default.createElement(material_2.ListItemText, { primary: react_1.default.createElement(material_2.Typography, { variant: "subtitle2", color: "text.primary" }, label) }))));
};
var TopNavCartButton = function (props) {
    var _a = props.icon, icon = _a === void 0 ? 'ShoppingCart' : _a, totalQuantity = props.totalQuantity, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick, sx: sx.root },
        react_1.default.createElement(material_1.Badge, { color: "primary", badgeContent: totalQuantity },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24, color: "text.primary" }))));
};
var CartButton = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'topNav' : _a, _b = props.label, label = _b === void 0 ? 'Cart' : _b, _c = props.icon, icon = _c === void 0 ? 'ShoppingCart' : _c;
    var _d = (0, react_1.useContext)(frontend_shopify_1.ShopContext), cart = _d.cart, toggleCart = _d.toggleCart;
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var handleCartClick = function () {
        setMenuOpen(false);
        toggleCart();
    };
    return variant == 'topNav' ? (react_1.default.createElement(TopNavCartButton, { icon: icon, handleClick: handleCartClick, totalQuantity: cart === null || cart === void 0 ? void 0 : cart.totalQuantity })) : (react_1.default.createElement(SideNavCartButton, { label: label, handleClick: handleCartClick, totalQuantity: cart === null || cart === void 0 ? void 0 : cart.totalQuantity }));
};
exports.default = CartButton;
var sx = {
    root: {
        pr: 1.5, // Space for the badge count
    },
    button: {
        width: '100%',
        color: 'text.primary',
        justifyContent: 'flex-start',
    },
    badge: {
        mr: 1,
    },
};
