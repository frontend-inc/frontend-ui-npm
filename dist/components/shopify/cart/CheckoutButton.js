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
var shopify_1 = require("@webstudio/shopify");
var addons_1 = require("hooks/addons");
var material_1 = require("@mui/material");
var components_1 = require("components");
var CheckoutButton = function (props) {
    var _a = props.size, size = _a === void 0 ? 'large' : _a;
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var cart = (0, shopify_1.useCart)().cart;
    var trackCheckoutStarted = (0, addons_1.useSegment)().trackCheckoutStarted;
    var handleCheckoutClick = function () {
        setLoading(true);
        setTimeout(function () { return redirectToWebUrl(); }, 500);
    };
    var redirectToWebUrl = function () {
        trackCheckoutStarted(cart);
        window.location = cart === null || cart === void 0 ? void 0 : cart.checkoutUrl;
        setLoading(false);
    };
    return (react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleCheckoutClick, variant: "contained", size: size, endIcon: react_1.default.createElement(components_1.IconLoader, { loading: loading }) }, "Checkout"));
};
exports.default = CheckoutButton;
