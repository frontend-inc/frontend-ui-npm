"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var shopify_1 = require("../../shopify");
var hooks_1 = require("../../../hooks");
var Logo_1 = __importDefault(require("./Logo"));
var MobileNav = function (props) {
    var setMenuOpen = (0, hooks_1.useApp)().setMenuOpen;
    var logo = props.logo, _a = props.logoWidth, logoWidth = _a === void 0 ? 120 : _a, _b = props.logoHeight, logoHeight = _b === void 0 ? 50 : _b, handleClick = props.handleClick, buttons = props.buttons, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableStripe, enableStripe = _d === void 0 ? false : _d, _e = props.enableShopify, enableShopify = _e === void 0 ? false : _e;
    return (react_1.default.createElement(material_1.Hidden, { mdUp: true },
        react_1.default.createElement(material_1.Box, { sx: sx.appBar },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0, sx: sx.header },
                react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-start", sx: sx.leftMenu },
                    react_1.default.createElement(material_1.IconButton, { onClick: function () { return setMenuOpen(true); } },
                        react_1.default.createElement(__1.Icon, { name: "Menu", size: 24 })),
                    react_1.default.createElement(Logo_1.default, { handleClick: function () { return handleClick('/'); }, src: logo, width: logoWidth, height: logoHeight - 20 })),
                react_1.default.createElement(material_1.Box, { sx: sx.rightMenu },
                    (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement(material_1.Box, { sx: { mr: 1 } },
                        react_1.default.createElement(__1.ButtonActions, { size: "small", buttons: buttons }))),
                    enableAuth && react_1.default.createElement(__1.AuthButton, null),
                    enableStripe && react_1.default.createElement(__1.CartButton, null),
                    enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null))))));
};
exports.default = MobileNav;
var sx = {
    appBar: {
        width: '100%',
        height: 64,
        bgcolor: 'background.default',
    },
    drawer: {
        bgcolor: 'background.default',
    },
    header: {
        width: '100%',
        alignItems: 'space-between',
    },
    rightMenu: {
        pr: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    leftMenu: {
        height: 60,
        alignItems: 'center'
    },
};
