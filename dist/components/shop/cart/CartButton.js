"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var CartSmallButton = function (props) {
    var totalItems = props.totalItems, handleClick = props.handleClick, _a = props.icon, icon = _a === void 0 ? "ShoppingBag" : _a;
    return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick },
        react_1.default.createElement(material_1.Badge, { color: "primary", badgeContent: totalItems },
            react_1.default.createElement(components_1.Icon, { name: icon, size: 24 }))));
};
var CartLargeButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Cart' : _a, _b = props.icon, icon = _b === void 0 ? 'ShoppingBag' : _b, totalItems = props.totalItems, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.Badge, { badgeContent: totalItems, color: "primary", sx: sx.badge }) },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(components_1.Icon, { name: icon })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, label) }))));
};
var CartButton = function (props) {
    var _a = props.size, size = _a === void 0 ? 'small' : _a, label = props.label, _b = props.icon, icon = _b === void 0 ? "ShoppingBag" : _b;
    var _c = (0, hooks_1.useCart)(), cart = _c.cart, cartOpen = _c.cartOpen, setCartOpen = _c.setCartOpen;
    return (size == "small" ? (react_1.default.createElement(CartSmallButton, { icon: icon, handleClick: function () { return setCartOpen(!cartOpen); }, totalItems: cart === null || cart === void 0 ? void 0 : cart.total_items })) : (react_1.default.createElement(CartLargeButton, { icon: icon, label: label, handleClick: function () { return setCartOpen(!cartOpen); }, totalItems: cart === null || cart === void 0 ? void 0 : cart.total_items })));
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
