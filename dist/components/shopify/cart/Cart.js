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
var webstudio_shopify_1 = require("webstudio-shopify");
var addons_1 = require("../../../hooks/addons");
var material_1 = require("@mui/material");
var webstudio_shopify_2 = require("webstudio-shopify");
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var Cart = function (props) {
    var _a, _b;
    var _c = props.title, title = _c === void 0 ? 'Your Cart' : _c;
    var trackCartViewed = (0, addons_1.useSegment)().trackCartViewed;
    var _d = (0, react_1.useContext)(webstudio_shopify_2.ShopContext), cartOpen = _d.cartOpen, toggleCart = _d.toggleCart;
    var cart = (0, webstudio_shopify_1.useCart)().cart;
    (0, react_1.useEffect)(function () {
        if (cartOpen && cart) {
            trackCartViewed(cart);
        }
    }, [cartOpen, cart]);
    return (react_1.default.createElement(components_1.Drawer, { anchor: "right", open: cartOpen, handleClose: toggleCart, title: title }, ((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.lines) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 4 },
        react_1.default.createElement(shopify_1.CartLines, null),
        react_1.default.createElement(shopify_1.CartDiscounts, null),
        react_1.default.createElement(shopify_1.CartTotals, null),
        react_1.default.createElement(shopify_1.CheckoutButton, null))) : (react_1.default.createElement(material_1.Box, { sx: sx.empty },
        react_1.default.createElement(components_1.Placeholder, { title: "Your cart is empty", description: "Items you add to your cart will siteear here." })))));
};
exports.default = Cart;
var sx = {
    root: {
        width: '100%',
        maxWidth: {
            xs: '100vw',
            sm: '100%',
        },
    },
    stickyPanel: {
        zIndex: 100,
        borderTop: '1px solid',
        borderColor: 'divider',
        position: {
            xs: 'fixed',
            sm: 'static',
        },
        bottom: {
            xs: '0',
            sm: 'unset',
        },
        pb: {
            xs: 4,
            sm: 0,
        },
        width: {
            xs: 'calc(100% - 64px)',
            sm: 'unset',
        },
    },
    empty: {
        mt: '100px',
    },
};
