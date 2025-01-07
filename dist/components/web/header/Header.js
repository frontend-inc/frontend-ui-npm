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
var __1 = require("../..");
var NavLogo_1 = __importDefault(require("./NavLogo"));
var __2 = require("../..");
var shopify_1 = require("../../shopify");
var react_2 = require("@nextui-org/react");
var MAX_LINKS = 3;
var Header = function (props) {
    var logo = props.logo, _a = props.links, links = _a === void 0 ? [] : _a, buttons = props.buttons, handleClick = props.handleClick, _b = props.enableAuth, enableAuth = _b === void 0 ? false : _b, _c = props.enableStripe, enableStripe = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d;
    var handlePress = function (path) {
        setIsMenuOpen(false);
        handleClick(path);
    };
    var _e = (0, react_1.useState)(false), isMenuOpen = _e[0], setIsMenuOpen = _e[1];
    return (react_1.default.createElement(react_2.Navbar, { isMenuOpen: isMenuOpen, onMenuOpenChange: setIsMenuOpen },
        (links === null || links === void 0 ? void 0 : links.length) > MAX_LINKS ? (react_1.default.createElement(react_2.NavbarContent, { justify: "start" },
            react_1.default.createElement(react_2.NavbarMenuToggle, { className: "text-foreground" }))) : (react_1.default.createElement(react_2.NavbarContent, { className: "sm:hidden", justify: "start" },
            react_1.default.createElement(react_2.NavbarMenuToggle, { className: "text-foreground" }))),
        react_1.default.createElement(react_2.NavbarContent, { justify: "start" },
            react_1.default.createElement(react_2.NavbarBrand, null,
                react_1.default.createElement(NavLogo_1.default, { src: logo, handleClick: function () { return handlePress('/'); } }))),
        (links === null || links === void 0 ? void 0 : links.length) <= MAX_LINKS && (react_1.default.createElement(react_2.NavbarContent, { className: "hidden sm:flex gap-4", justify: "center" }, links === null || links === void 0 ? void 0 : links.map(function (link, index) {
            var _a, _b;
            return ((_a = link === null || link === void 0 ? void 0 : link.children) === null || _a === void 0 ? void 0 : _a.length) == 0 ? (react_1.default.createElement(react_2.NavbarItem, { key: link.id },
                react_1.default.createElement(react_2.Button, { className: "text-foreground", variant: "light", onPress: function () { return handlePress(link === null || link === void 0 ? void 0 : link.path); } }, link === null || link === void 0 ? void 0 : link.label))) : (react_1.default.createElement(react_2.Dropdown, { key: link.id },
                react_1.default.createElement(react_2.DropdownTrigger, null,
                    react_1.default.createElement(react_2.Button, { variant: "light", className: "text-foreground", endContent: react_1.default.createElement(__1.RemixIcon, { size: "lg", name: "ri-arrow-down-s-line", className: "text-foreground" }) }, link === null || link === void 0 ? void 0 : link.label)),
                react_1.default.createElement(react_2.DropdownMenu
                //@ts-ignore
                , { 
                    //@ts-ignore
                    onAction: handlePress }, (_b = link === null || link === void 0 ? void 0 : link.children) === null || _b === void 0 ? void 0 : _b.map(function (child) { return (react_1.default.createElement(react_2.DropdownItem, { key: (child === null || child === void 0 ? void 0 : child.path) || (child === null || child === void 0 ? void 0 : child.url) }, child === null || child === void 0 ? void 0 : child.label)); }))));
        }))),
        react_1.default.createElement(react_2.NavbarContent, { justify: "end" },
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && react_1.default.createElement(__1.ButtonActions, { size: "sm", buttons: buttons }),
            enableAuth && react_1.default.createElement(__1.AuthButton, null),
            enableStripe && react_1.default.createElement(__2.CartButton, null),
            enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null)),
        react_1.default.createElement(react_2.NavbarMenu, null, links === null || links === void 0 ? void 0 : links.map(function (link, index) {
            var _a, _b;
            return (react_1.default.createElement(react_2.NavbarMenuItem, { key: link === null || link === void 0 ? void 0 : link.id }, ((_a = link === null || link === void 0 ? void 0 : link.children) === null || _a === void 0 ? void 0 : _a.length) == 0 ? (react_1.default.createElement(react_2.Button, { variant: "light", className: "w-full", onPress: function () { return handlePress(link === null || link === void 0 ? void 0 : link.path); }, size: "lg" }, link === null || link === void 0 ? void 0 : link.label)) : (react_1.default.createElement(react_2.Dropdown, { key: index },
                react_1.default.createElement(react_2.DropdownTrigger, null,
                    react_1.default.createElement(react_2.Button, { size: "lg", variant: "light", className: "w-full", endContent: react_1.default.createElement(__1.RemixIcon, { name: "ri-arrow-down-s-line", className: "text-foreground" }) }, link === null || link === void 0 ? void 0 : link.label)),
                react_1.default.createElement(react_2.DropdownMenu, { onAction: handlePress }, (_b = link === null || link === void 0 ? void 0 : link.children) === null || _b === void 0 ? void 0 : _b.map(function (child) { return (react_1.default.createElement(react_2.DropdownItem, { key: (child === null || child === void 0 ? void 0 : child.path) || (child === null || child === void 0 ? void 0 : child.url) }, child === null || child === void 0 ? void 0 : child.label)); }))))));
        }))));
};
exports.default = Header;
