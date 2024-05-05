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
var components_1 = require("../../../components");
var Logo_1 = __importDefault(require("./Logo"));
var shopify_1 = require("../../shopify");
var frontend_js_1 = require("frontend-js");
var TopNavMenuItem_1 = __importDefault(require("./TopNavMenuItem"));
var DesktopTopNav = function (props) {
    var _a, _b;
    var editing = props.editing, logo = props.logo, menuItems = props.menuItems, handleClick = props.handleClick, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d, _e = props.enableNotifications, enableNotifications = _e === void 0 ? false : _e, _f = props.position, position = _f === void 0 ? 'absolute' : _f;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var filterVisibility = function (menuItem) {
        if (menuItem.visibility === 'logged_in' && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
            return false;
        }
        if (menuItem.visibility === 'logged_out' && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
            return false;
        }
        return true;
    };
    return (react_1.default.createElement(material_1.Hidden, { mdDown: true },
        react_1.default.createElement(material_1.AppBar, { sx: __assign(__assign({}, sx.appBar), (enableNotifications && sx.appBarNotifications)), position: position, elevation: 0 },
            react_1.default.createElement(material_1.Toolbar, null,
                react_1.default.createElement(material_1.Box, { sx: sx.desktopTopNav },
                    react_1.default.createElement(material_1.Box, { sx: sx.leftMenu },
                        react_1.default.createElement(Logo_1.default, { src: logo, width: 120, height: 40, handleClick: function () { return handleClick('/'); } })),
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu }, (_b = (_a = menuItems === null || menuItems === void 0 ? void 0 : menuItems.filter(function (menuItem) { return menuItem.parent_id == null; })) === null || _a === void 0 ? void 0 : _a.filter(filterVisibility)) === null || _b === void 0 ? void 0 : _b.map(function (menuItem, index) { return (react_1.default.createElement(TopNavMenuItem_1.default, { key: index, menuItem: menuItem, handleClick: handleClick })); })),
                    react_1.default.createElement(material_1.Box, { sx: sx.rightMenu },
                        enableAuth && react_1.default.createElement(components_1.AuthButton, { editing: editing }),
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
