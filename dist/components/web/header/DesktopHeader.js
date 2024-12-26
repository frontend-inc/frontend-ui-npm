'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var Logo_1 = __importDefault(require("./Logo"));
var __2 = require("../..");
var shopify_1 = require("../../shopify");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_1 = require("frontend-shadcn");
var NavigationMenu_1 = require("./NavigationMenu");
var MAX_LINKS = 5;
var DesktopHeader = function (props) {
    var logo = props.logo, links = props.links, buttons = props.buttons, bgColor = props.bgColor, handleClick = props.handleClick, _a = props.enableAuth, enableAuth = _a === void 0 ? false : _a, _b = props.enableStripe, enableStripe = _b === void 0 ? false : _b, _c = props.enableShopify, enableShopify = _c === void 0 ? false : _c;
    var handleLogoClick = function () {
        handleClick('/');
    };
    var _d = (0, react_1.useState)(false), isScrolled = _d[0], setIsScrolled = _d[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    var setMenuOpen = (0, hooks_1.useApp)().setMenuOpen;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('hidden md:block w-full h-16 bg-background'), style: {
            backgroundColor: bgColor,
        } },
        react_1.default.createElement("div", { className: "w-full flex flex-row justify-between" },
            react_1.default.createElement("div", { className: "flex flex-row basis-1/3" },
                (links === null || links === void 0 ? void 0 : links.length) > MAX_LINKS && (react_1.default.createElement("div", { className: "pl-1 flex items-center justify-center h-[60px]" },
                    react_1.default.createElement(components_1.IconButton, { color: "ghost", onClick: function () { return setMenuOpen(true); } },
                        react_1.default.createElement(__1.RemixIcon, { name: "ri-menu-fill" })))),
                react_1.default.createElement("div", { className: "h-[62px] mx-4 flex flex-row items-center justify-start" },
                    react_1.default.createElement(Logo_1.default, { src: logo, width: 180, height: 56, handleClick: handleLogoClick }))),
            react_1.default.createElement("div", { className: "basis-1/3 flex flex-row justify-center items-center" }, (links === null || links === void 0 ? void 0 : links.length) <= MAX_LINKS && (react_1.default.createElement(NavigationMenu_1.NavigationMenu, { links: links, handleClick: handleClick }))),
            react_1.default.createElement("div", { className: "flex flex-row items-center justify-end h-[60px] pr-1 basis-1/3" },
                (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "pr-1" },
                    react_1.default.createElement(__1.ButtonActions, { size: "sm", buttons: buttons }))),
                enableAuth && react_1.default.createElement(__1.AuthButton, null),
                enableStripe && react_1.default.createElement(__2.CartButton, null),
                enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null)))));
};
exports.default = DesktopHeader;
