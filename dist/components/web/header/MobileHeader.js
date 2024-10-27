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
var MobileHeader = function (_a) {
    var logo = _a.logo, _b = _a.logoWidth, logoWidth = _b === void 0 ? 120 : _b, _c = _a.logoHeight, logoHeight = _c === void 0 ? 50 : _c, handleClick = _a.handleClick, buttons = _a.buttons, _d = _a.enableAuth, enableAuth = _d === void 0 ? false : _d, _e = _a.enableStripe, enableStripe = _e === void 0 ? false : _e, _f = _a.enableShopify, enableShopify = _f === void 0 ? false : _f;
    var setMenuOpen = (0, hooks_1.useApp)().setMenuOpen;
    return (react_1.default.createElement("div", { className: "md:hidden w-full h-16 bg-background" },
        react_1.default.createElement("div", { className: "flex justify-between items-center h-full px-4" },
            react_1.default.createElement("div", { className: "flex items-center" },
                react_1.default.createElement(components_1.Button, { variant: "ghost", size: "icon", className: "mr-2", onClick: function () { return setMenuOpen(true); } },
                    react_1.default.createElement(__1.Icon, { name: "Menu", size: 24 })),
                react_1.default.createElement(Logo_1.default, { handleClick: function () { return handleClick('/'); }, src: logo, width: logoWidth, height: logoHeight - 20 })),
            react_1.default.createElement("div", { className: "flex items-center" },
                (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "mr-2" },
                    react_1.default.createElement(__1.ButtonActions, { size: "sm", buttons: buttons }))),
                enableAuth && react_1.default.createElement(__1.AuthButton, null),
                enableStripe && react_1.default.createElement(__1.CartButton, null),
                enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null)))));
};
exports.default = MobileHeader;
