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
var material_1 = require("@mui/material");
var __1 = require("../..");
var Logo_1 = __importDefault(require("./Logo"));
var shopify_1 = require("../../shopify");
var context_1 = require("../../../context");
var TopNavMenuItem_1 = __importDefault(require("./TopNavMenuItem"));
var DesktopTopNav = function (props) {
    var _a;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var editing = props.editing, logo = props.logo, menuItems = props.menuItems, handleClick = props.handleClick, _b = props.enableAuth, enableAuth = _b === void 0 ? false : _b, _c = props.enableShopify, enableShopify = _c === void 0 ? false : _c, _d = props.enableNotifications, enableNotifications = _d === void 0 ? false : _d, _e = props.position, position = _e === void 0 ? 'absolute' : _e;
    return (react_1.default.createElement(material_1.Hidden, { smDown: true },
        react_1.default.createElement(material_1.AppBar, { sx: __assign(__assign({}, sx.appBar), (enableNotifications && sx.appBarNotifications)), position: position, elevation: 0 },
            react_1.default.createElement(material_1.Toolbar, null,
                react_1.default.createElement(material_1.Box, { sx: sx.desktopTopNav },
                    react_1.default.createElement(material_1.Box, { sx: sx.leftMenu },
                        react_1.default.createElement(Logo_1.default, { src: logo, width: 120, height: 40, handleClick: function () { return handleClick('/'); } })),
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu }, (_a = menuItems === null || menuItems === void 0 ? void 0 : menuItems.filter(function (menuItem) { return menuItem.parent_id == null; })) === null || _a === void 0 ? void 0 : _a.map(function (menuItem, index) { return (react_1.default.createElement(TopNavMenuItem_1.default, { key: index, menuItem: menuItem, handleClick: handleClick })); })),
                    react_1.default.createElement(material_1.Box, { sx: sx.rightMenu },
                        enableAuth && (react_1.default.createElement(__1.AuthButton, { editing: editing, myAccountUrl: "".concat(clientUrl, "/my-account") })),
                        enableShopify && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(shopify_1.ShopifyAuth, null),
                            react_1.default.createElement(shopify_1.SearchButton, null),
                            react_1.default.createElement(shopify_1.CartButton, null)))))))));
};
exports.default = DesktopTopNav;
var sx = {
    appBar: {
        height: 64,
        position: 'absolute',
        zIndex: function (theme) { return theme.zIndex.appBar; },
        bgcolor: 'background.default',
    },
    appBarNotifications: {
        position: 'absolute',
        top: 40,
    },
    desktopTopNav: {
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
};
