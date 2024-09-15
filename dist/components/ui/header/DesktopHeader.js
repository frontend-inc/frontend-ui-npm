"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Logo_1 = __importDefault(require("./Logo"));
var __2 = require("../..");
var shopify_1 = require("../../shopify");
var hooks_1 = require("../../../hooks");
var TopMenuItem_1 = __importDefault(require("./TopMenuItem"));
var MAX_LINKS = 5;
var DesktopHeader = function (props) {
    var logo = props.logo, links = props.links, handleClick = props.handleClick, _a = props.enableAuth, enableAuth = _a === void 0 ? false : _a, _b = props.enableStripe, enableStripe = _b === void 0 ? false : _b, _c = props.enableShopify, enableShopify = _c === void 0 ? false : _c;
    var setMenuOpen = (0, hooks_1.useApp)().setMenuOpen;
    return (react_1.default.createElement(material_1.Hidden, { mdDown: true },
        react_1.default.createElement(material_1.Box, { sx: sx.appBar },
            react_1.default.createElement(material_1.Box, { width: '100%' },
                react_1.default.createElement(material_1.Box, { sx: sx.desktop },
                    (links === null || links === void 0 ? void 0 : links.length) > MAX_LINKS && (react_1.default.createElement(material_1.Box, { sx: sx.menuButton },
                        react_1.default.createElement(material_1.IconButton, { onClick: function () { return setMenuOpen(true); } },
                            react_1.default.createElement(__1.Icon, { name: "Menu", size: 24 })))),
                    react_1.default.createElement(material_1.Box, { sx: sx.leftMenu },
                        react_1.default.createElement(Logo_1.default, { src: logo, width: 120, height: 40, handleClick: function () { return handleClick('/'); } })),
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu }, (links === null || links === void 0 ? void 0 : links.length) <= MAX_LINKS &&
                        (links === null || links === void 0 ? void 0 : links.map(function (menuItem, index) { return (react_1.default.createElement(TopMenuItem_1.default, { key: index, menuItem: menuItem, handleClick: handleClick })); }))),
                    react_1.default.createElement(material_1.Box, { sx: sx.rightMenu },
                        enableAuth && react_1.default.createElement(__1.AuthButton, null),
                        enableStripe && react_1.default.createElement(__2.CartButton, null),
                        enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, null)))))));
};
exports.default = DesktopHeader;
var sx = {
    appBar: {
        width: '100%',
        height: 64,
        bgcolor: 'background.default',
    },
    desktop: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
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
    menuButton: {
        pl: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px',
    },
};
