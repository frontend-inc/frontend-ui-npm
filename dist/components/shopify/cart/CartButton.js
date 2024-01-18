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
var shopify_1 = require("@webstudio/shopify");
var context_1 = require("../../../context");
var components_1 = require("../../../components");
var CartButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Cart' : _a, _b = props.showLabel, showLabel = _b === void 0 ? false : _b, _c = props.showIcon, showIcon = _c === void 0 ? true : _c, _d = props.editing, editing = _d === void 0 ? false : _d, _e = props.icon, icon = _e === void 0 ? 'ShoppingCart' : _e;
    var _f = (0, react_1.useContext)(shopify_1.ShopContext), cart = _f.cart, toggleCart = _f.toggleCart;
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var handleCartClick = function () {
        setMenuOpen(false);
        if (!editing) {
            toggleCart();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, !showLabel ? (react_1.default.createElement(material_1.IconButton, { onClick: handleCartClick, sx: sx.root },
        react_1.default.createElement(material_1.Badge, { color: "primary", badgeContent: cart === null || cart === void 0 ? void 0 : cart.totalQuantity },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24, color: "text.primary" })))) : (react_1.default.createElement(material_1.Button, { fullWidth: true, sx: sx.button, onClick: handleCartClick, startIcon: showIcon && (react_1.default.createElement(material_1.Badge, { badgeContent: cart === null || cart === void 0 ? void 0 : cart.totalQuantity, color: "primary" },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24 }))) }, label))));
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
};
