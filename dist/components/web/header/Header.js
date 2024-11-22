'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MobileDrawer_1 = __importDefault(require("./MobileDrawer"));
var MobileHeader_1 = __importDefault(require("./MobileHeader"));
var DesktopHeader_1 = __importDefault(require("./DesktopHeader"));
var hooks_1 = require("../../../hooks");
var Header = function (props) {
    var appLogo = (0, hooks_1.useApp)().logo;
    var logo = props.logo, bgColor = props.bgColor, _a = props.links, links = _a === void 0 ? [] : _a, _b = props.buttons, buttons = _b === void 0 ? [] : _b, handleClick = props.handleClick, _c = props.enableStripe, enableStripe = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d, _e = props.enableAuth, enableAuth = _e === void 0 ? false : _e;
    return (react_1.default.createElement("header", { className: "h-[64px] w-full" },
        react_1.default.createElement(DesktopHeader_1.default, { bgColor: bgColor, logo: logo || appLogo, enableAuth: enableAuth, enableStripe: enableStripe, enableShopify: enableShopify, links: links, buttons: buttons, handleClick: handleClick }),
        react_1.default.createElement(MobileHeader_1.default, { bgColor: bgColor, logo: logo || appLogo, enableAuth: enableAuth, enableStripe: enableStripe, enableShopify: enableShopify, enableNotifications: true, links: links, buttons: buttons, handleClick: handleClick }),
        react_1.default.createElement(MobileDrawer_1.default, { links: links, handleClick: handleClick })));
};
exports.default = Header;
