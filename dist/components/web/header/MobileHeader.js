'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var shopify_1 = require("../../shopify");
var hooks_1 = require("../../../hooks");
var Logo_1 = __importDefault(require("./Logo"));
var components_1 = require("../../../components");
var MobileHeader = function (props) {
    var bgColor = props.bgColor, logo = props.logo, _a = props.logoWidth, logoWidth = _a === void 0 ? 120 : _a, _b = props.logoHeight, logoHeight = _b === void 0 ? 50 : _b, handleClick = props.handleClick, buttons = props.buttons, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableStripe, enableStripe = _d === void 0 ? false : _d, _e = props.enableShopify, enableShopify = _e === void 0 ? false : _e;
    var setMenuOpen = (0, hooks_1.useApp)().setMenuOpen;
    return (react_1.default.createElement("div", { className: "block md:hidden w-full h-16 bg-background", style: {
            backgroundColor: bgColor,
        } },
        react_1.default.createElement("div", { className: "flex justify-between items-center h-full px-4" },
            react_1.default.createElement("div", { className: "flex items-center" },
                react_1.default.createElement(components_1.Button, { variant: "ghost", size: "icon", className: "mr-2", onClick: function () { return setMenuOpen(true); } },
                    react_1.default.createElement(components_1.RemixIcon, { name: "ri-menu-fill" })),
                react_1.default.createElement(Logo_1.default, { handleClick: function () { return handleClick('/'); }, src: logo, width: logoWidth, height: logoHeight - 20 })),
            react_1.default.createElement("div", { className: "flex items-center" },
                (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "mr-2" },
                    react_1.default.createElement(__1.ButtonActions, { size: "sm", buttons: buttons }))),
                enableAuth && react_1.default.createElement(__1.AuthButton, null),
                enableStripe && react_1.default.createElement(__1.CartButton, null),
                enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null)))));
};
exports.default = MobileHeader;
