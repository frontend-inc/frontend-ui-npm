'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var __1 = require("../..");
var Logo_1 = __importDefault(require("./Logo"));
var __2 = require("../..");
var shopify_1 = require("../../shopify");
var hooks_1 = require("../../../hooks");
var DesktopLink_1 = __importDefault(require("./DesktopLink"));
var MAX_LINKS = 5;
var DesktopHeader = function (props) {
    var logo = props.logo, links = props.links, buttons = props.buttons, handleClick = props.handleClick, _a = props.enableAuth, enableAuth = _a === void 0 ? false : _a, _b = props.enableStripe, enableStripe = _b === void 0 ? false : _b, _c = props.enableShopify, enableShopify = _c === void 0 ? false : _c;
    var setMenuOpen = (0, hooks_1.useApp)().setMenuOpen;
    return (react_1.default.createElement("div", { className: "w-full h-16 bg-background" },
        react_1.default.createElement("div", { className: "w-full" },
            react_1.default.createElement("div", { className: "w-full flex flex-row" },
                (links === null || links === void 0 ? void 0 : links.length) > MAX_LINKS && (react_1.default.createElement("div", { className: "pl-1 flex items-center justify-center h-[60px]" },
                    react_1.default.createElement(core_1.IconButton, { color: "ghost", onClick: function () { return setMenuOpen(true); } },
                        react_1.default.createElement(__1.Icon, { name: "Menu", size: 24 })))),
                react_1.default.createElement("div", { className: "w-[200px] h-[60px] mx-4 flex flex-row items-center justify-start" },
                    react_1.default.createElement(Logo_1.default, { src: logo, width: 120, height: 40, handleClick: function () { return handleClick('/'); } })),
                react_1.default.createElement("div", { className: "flex flex-row items-center justify-center w-full h-[60px]" }, (links === null || links === void 0 ? void 0 : links.length) <= MAX_LINKS &&
                    (links === null || links === void 0 ? void 0 : links.map(function (menuItem, index) { return (react_1.default.createElement(DesktopLink_1.default, { key: index, menuItem: menuItem, handleClick: handleClick })); }))),
                react_1.default.createElement("div", { className: "w-[200px] flex flex-row items-center justify-end h-[60px] pr-1" },
                    (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "pr-1" },
                        react_1.default.createElement(__1.ButtonActions, { size: "small", buttons: buttons }))),
                    enableAuth && react_1.default.createElement(__1.AuthButton, null),
                    enableStripe && react_1.default.createElement(__2.CartButton, null),
                    enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null))))));
};
exports.default = DesktopHeader;
