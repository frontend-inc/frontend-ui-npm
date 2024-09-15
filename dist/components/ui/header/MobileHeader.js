"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var __2 = require("../..");
var shopify_1 = require("../../shopify");
var hooks_1 = require("../../../hooks");
var Logo_1 = __importDefault(require("./Logo"));
var MobileNav = function (props) {
    var setMenuOpen = (0, hooks_1.useApp)().setMenuOpen;
    var logo = props.logo, _a = props.logoWidth, logoWidth = _a === void 0 ? 120 : _a, _b = props.logoHeight, logoHeight = _b === void 0 ? 50 : _b, handleClick = props.handleClick, _c = props.enableStripe, enableStripe = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d;
    return (react_1.default.createElement(material_1.Hidden, { mdUp: true },
        react_1.default.createElement(material_1.Box, { sx: __assign({}, sx.appBar) },
            react_1.default.createElement(material_1.Box, { width: "100%" },
                react_1.default.createElement(material_1.Box, { sx: sx.desktopTop },
                    react_1.default.createElement(material_1.Box, { sx: sx.leftMenu },
                        react_1.default.createElement(material_1.IconButton, { onClick: function () { return setMenuOpen(true); } },
                            react_1.default.createElement(__1.Icon, { name: "Menu", size: 24 }))),
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu },
                        react_1.default.createElement(Logo_1.default, { handleClick: function () { return handleClick('/'); }, src: logo, width: logoWidth, height: logoHeight - 20 })),
                    react_1.default.createElement(material_1.Box, { sx: sx.rightMenu },
                        enableStripe && react_1.default.createElement(__2.CartButton, null),
                        enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null)))))));
};
exports.default = MobileNav;
var sx = {
    appBar: {
        height: 64,
        bgcolor: 'background.default',
    },
    sideNav: {
        height: '100%',
        width: {
            sm: '280px',
            xs: '100%',
        },
        minWidth: {
            sm: '280px',
            xs: '100%',
        },
        position: 'relative',
        borderRight: '1px solid',
        borderColor: 'divider',
    },
    drawer: {
        bgcolor: 'background.default',
    },
    desktopTop: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
    },
    desktopSideNav: {
        justifyContent: 'space-between',
        width: '280px',
        p: 2,
        height: '100%',
    },
    leftMenu: {
        width: '200px',
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    centerMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60px',
    },
    rightMenu: {
        width: '200px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '60px',
    },
};
