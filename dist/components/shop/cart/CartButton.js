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
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var cookies_next_1 = require("cookies-next");
var CartIconButton = function (props) {
    var totalItems = props.totalItems, handleClick = props.handleClick, _a = props.icon, icon = _a === void 0 ? 'ShoppingBag' : _a;
    return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick },
        react_1.default.createElement(material_1.Badge, { color: "primary", badgeContent: totalItems },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24 }))));
};
var CartBtn = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Cart' : _a, _b = props.icon, icon = _b === void 0 ? 'ShoppingBag' : _b, totalItems = props.totalItems, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.Badge, { badgeContent: totalItems, color: "primary", sx: sx.badge }) },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(components_1.Icon, { name: icon })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, label) }))));
};
var CartButton = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'icon' : _a, label = props.label, _b = props.icon, icon = _b === void 0 ? 'ShoppingBag' : _b;
    var _c = (0, hooks_1.useCart)(), cartCookie = _c.cartCookie, cart = _c.cart, cartOpen = _c.cartOpen, setCartOpen = _c.setCartOpen, createCart = _c.createCart, fetchCart = _c.fetchCart;
    var _d = (0, react_1.useState)(String((0, cookies_next_1.getCookie)(cartCookie))), cartId = _d[0], setCartId = _d[1];
    (0, react_1.useEffect)(function () {
        if (!cartId) {
            createCart();
        }
        else {
            fetchCart(cartId);
        }
    }, [cartId]);
    (0, react_1.useEffect)(function () {
        if (cartCookie && (cart === null || cart === void 0 ? void 0 : cart.uid)) {
            setCartId(cart === null || cart === void 0 ? void 0 : cart.uid);
            (0, cookies_next_1.setCookie)(cartCookie, cart === null || cart === void 0 ? void 0 : cart.uid);
        }
    }, [cartCookie, cart === null || cart === void 0 ? void 0 : cart.uid]);
    return variant == 'icon' ? (react_1.default.createElement(CartIconButton, { icon: icon, handleClick: function () { return setCartOpen(!cartOpen); }, totalItems: cart === null || cart === void 0 ? void 0 : cart.total_items })) : (react_1.default.createElement(CartBtn, { icon: icon, label: label, handleClick: function () { return setCartOpen(!cartOpen); }, totalItems: cart === null || cart === void 0 ? void 0 : cart.total_items }));
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
    listItemButton: {
        px: 1,
    },
    badge: {
        mr: 1,
    },
};
