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
var components_1 = require("../../../components");
var Logo_1 = __importDefault(require("./Logo"));
var shopify_1 = require("../../shopify");
var context_1 = require("../../../context");
var index_1 = require("../../../constants/index");
var SideNavMenuItem_1 = __importDefault(require("./SideNavMenuItem"));
var DesktopSideNav = function (props) {
    var _a;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var editing = props.editing, logo = props.logo, menuItems = props.menuItems, _b = props.logoWidth, logoWidth = _b === void 0 ? index_1.HEADER_LOGO_WIDTH : _b, _c = props.logoHeight, logoHeight = _c === void 0 ? index_1.HEADER_LOGO_HEIGHT : _c, handleClick = props.handleClick, _d = props.enableAuth, enableAuth = _d === void 0 ? false : _d, _e = props.enableShopify, enableShopify = _e === void 0 ? false : _e, _f = props.enableNotifications, enableNotifications = _f === void 0 ? false : _f;
    return (react_1.default.createElement(material_1.Hidden, { smDown: true },
        react_1.default.createElement(material_1.Box, { sx: sx.sideNav },
            react_1.default.createElement(material_1.Stack, { sx: __assign(__assign(__assign(__assign({}, sx.desktopSideNav), (enableNotifications && sx.desktopSideNavNotifications)), (editing && sx.desktopSideNavEditor)), (editing &&
                    enableNotifications &&
                    sx.desktopSideNavEditorNotifications)), direction: "column", spacing: 2 },
                react_1.default.createElement(material_1.Stack, { sx: sx.desktopSideMenuItems, direction: "column", spacing: 2 },
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu },
                        react_1.default.createElement(Logo_1.default, { handleClick: function () { return handleClick('/'); }, src: logo, width: logoWidth, height: logoHeight })),
                    react_1.default.createElement(material_1.List, null, (_a = menuItems === null || menuItems === void 0 ? void 0 : menuItems.filter(function (menuItem) { return menuItem.parent_id == null; })) === null || _a === void 0 ? void 0 :
                        _a.map(function (menuItem, index) { return (react_1.default.createElement(SideNavMenuItem_1.default, { key: index, menuItem: menuItem, handleClick: handleClick })); }),
                        enableShopify && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(shopify_1.SearchButton, { variant: "sideNav" }),
                            react_1.default.createElement(shopify_1.CartButton, { variant: "sideNav", editing: editing }))))),
                (enableAuth || enableShopify) && (react_1.default.createElement(material_1.Box, { sx: sx.divider },
                    enableShopify && react_1.default.createElement(shopify_1.ShopifyAuth, { variant: "sideNav" }),
                    enableAuth && (react_1.default.createElement(components_1.AuthButton, { showLabel: true, editing: editing, myAccountUrl: "".concat(clientUrl, "/auth/my-account") }))))))));
};
exports.default = DesktopSideNav;
var sx = {
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
    desktopSideNav: {
        justifyContent: 'space-between',
        width: '280px',
        p: 2,
        height: '100%',
    },
    desktopSideNavNotifications: {
        height: 'calc(100% - 40px)',
    },
    desktopSideNavEditor: {
        height: 'calc(100% - 140px)',
    },
    desktopSideNavEditorNotifications: {
        height: 'calc(100% - 180px)',
    },
    desktopSideMenuItems: {
        height: '100%',
    },
    centerMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60px',
    },
    menuButton: {
        justifyContent: 'flex-start',
        bgcolor: 'background.default',
        color: 'text.primary',
    },
    divider: {
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 1.5,
    },
};
