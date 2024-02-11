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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var context_1 = require("../../../context");
var index_1 = require("../../../constants/index");
var DesktopTopNav = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var editing = props.editing, logo = props.logo, menuItems = props.menuItems, _a = props.logoWidth, logoWidth = _a === void 0 ? index_1.HEADER_LOGO_WIDTH : _a, _b = props.logoHeight, logoHeight = _b === void 0 ? index_1.HEADER_LOGO_HEIGHT : _b, handleClick = props.handleClick, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d, _e = props.enableNotifications, enableNotifications = _e === void 0 ? false : _e, _f = props.position, position = _f === void 0 ? 'absolute' : _f, _g = props.showIcons, showIcons = _g === void 0 ? true : _g;
    return (react_1.default.createElement(material_1.Hidden, { smDown: true },
        react_1.default.createElement(material_1.AppBar, { sx: __assign(__assign({}, sx.appBar), (enableNotifications && sx.appBarNotifications)), position: position, elevation: 0 },
            react_1.default.createElement(material_1.Toolbar, null,
                react_1.default.createElement(material_1.Box, { sx: sx.desktopTopNav },
                    react_1.default.createElement(material_1.Box, { sx: sx.leftMenu },
                        react_1.default.createElement(components_1.Logo, { src: logo, width: logoWidth, height: logoHeight })),
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem, index) { return (react_1.default.createElement(material_1.Button, { key: index, sx: sx.menuButton, onClick: function () { return handleClick(menuItem.path); }, startIcon: showIcons && react_1.default.createElement(components_1.Icon, { size: 24, name: menuItem.icon }) }, menuItem.label)); })),
                    react_1.default.createElement(material_1.Box, { sx: sx.rightMenu },
                        enableAuth && (react_1.default.createElement(components_1.AuthButton, { editing: editing, myAccountUrl: "".concat(clientUrl, "/my-account") })),
                        enableShopify && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(shopify_1.ShopifyAuth, { editing: editing }),
                            react_1.default.createElement(shopify_1.SearchButton, { editing: editing }),
                            react_1.default.createElement(shopify_1.CartButton, { editing: editing })))))))));
};
var DesktopSideNav = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var editing = props.editing, logo = props.logo, menuItems = props.menuItems, _a = props.logoWidth, logoWidth = _a === void 0 ? index_1.HEADER_LOGO_WIDTH : _a, _b = props.logoHeight, logoHeight = _b === void 0 ? index_1.HEADER_LOGO_HEIGHT : _b, handleClick = props.handleClick, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d, _e = props.enableNotifications, enableNotifications = _e === void 0 ? false : _e, _f = props.showIcons, showIcons = _f === void 0 ? true : _f;
    return (react_1.default.createElement(material_1.Hidden, { smDown: true },
        react_1.default.createElement(material_1.Box, { sx: sx.sideNav },
            react_1.default.createElement(material_1.Stack, { sx: __assign(__assign(__assign(__assign({}, sx.desktopSideNav), (enableNotifications && sx.desktopSideNavNotifications)), (editing && sx.desktopSideNavEditor)), (editing && enableNotifications && sx.desktopSideNavEditorNotifications)), direction: "column", spacing: 2 },
                react_1.default.createElement(material_1.Stack, { sx: sx.desktopSideMenuItems, direction: "column", spacing: 2 },
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu },
                        react_1.default.createElement(components_1.Logo, { src: logo, width: logoWidth, height: logoHeight })), menuItems === null || menuItems === void 0 ? void 0 :
                    menuItems.map(function (menuItem, index) { return (react_1.default.createElement(material_1.Button, { sx: sx.menuButton, key: index, onClick: function () { return handleClick(menuItem.path); }, startIcon: showIcons && react_1.default.createElement(components_1.Icon, { size: 24, name: menuItem.icon }) }, menuItem.label)); }),
                    enableShopify && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(shopify_1.SearchButton, { showLabel: true, showIcon: showIcons, editing: editing }),
                        react_1.default.createElement(shopify_1.CartButton, { showLabel: true, showIcon: showIcons, editing: editing })))),
                (enableAuth || enableShopify) && (react_1.default.createElement(material_1.Box, { sx: sx.divider },
                    enableShopify && (react_1.default.createElement(shopify_1.ShopifyAuth, { showLabel: true, editing: editing })),
                    enableAuth && (react_1.default.createElement(components_1.AuthButton, { showLabel: true, showIcon: showIcons, editing: editing, myAccountUrl: "".concat(clientUrl, "/my-account") }))))))));
};
var MobileNav = function (props) {
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var editing = props.editing, logo = props.logo, _a = props.logoWidth, logoWidth = _a === void 0 ? 120 : _a, _b = props.logoHeight, logoHeight = _b === void 0 ? 50 : _b, _c = props.enableShopify, enableShopify = _c === void 0 ? false : _c, _d = props.enableNotifications, enableNotifications = _d === void 0 ? false : _d;
    return (react_1.default.createElement(material_1.Hidden, { smUp: true },
        react_1.default.createElement(material_1.AppBar, { sx: __assign(__assign({}, sx.appBar), (enableNotifications && sx.appBarNotifications)), position: 'absolute', elevation: 0 },
            react_1.default.createElement(material_1.Toolbar, { sx: sx.toolbar },
                react_1.default.createElement(material_1.Box, { sx: sx.desktopTopNav },
                    react_1.default.createElement(material_1.Box, { sx: sx.leftMenu },
                        react_1.default.createElement(material_1.IconButton, { onClick: function () { return (!editing ? setMenuOpen(true) : null); } },
                            react_1.default.createElement(components_1.Icon, { name: "Menu", size: 24 }))),
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu },
                        react_1.default.createElement(components_1.Logo, { src: logo, width: logoWidth, height: logoHeight - 20 })),
                    react_1.default.createElement(material_1.Box, { sx: sx.rightMenu }, enableShopify && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(shopify_1.SearchButton, { editing: editing }),
                        react_1.default.createElement(shopify_1.CartButton, { editing: editing })))))))));
};
var MobileDrawer = function (props) {
    var _a = (0, react_1.useContext)(context_1.AppContext), clientUrl = _a.clientUrl, menuOpen = _a.menuOpen, setMenuOpen = _a.setMenuOpen;
    var editing = props.editing, menuItems = props.menuItems, handleClick = props.handleClick, enableAuth = props.enableAuth, enableShopify = props.enableShopify, showIcons = props.showIcons;
    var handleMenuClick = function (path) {
        if (!editing) {
            setMenuOpen(false);
            handleClick(path);
        }
    };
    return (react_1.default.createElement(components_1.Drawer, { open: menuOpen, handleClose: function () { return setMenuOpen(false); }, anchor: "left", styles: sx.drawer },
        react_1.default.createElement(material_1.Box, { sx: sx.mobileMenu },
            react_1.default.createElement(material_1.Stack, { spacing: 1, direction: "column", sx: sx.mobileMenuItems }, menuItems === null || menuItems === void 0 ? void 0 :
                menuItems.map(function (menuItem, index) { return (react_1.default.createElement(material_1.Button, { sx: sx.menuButton, key: index, onClick: function () { return handleMenuClick(menuItem.path); }, startIcon: showIcons && react_1.default.createElement(components_1.Icon, { size: 24, name: menuItem.icon }) }, menuItem.label)); }),
                enableShopify && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(shopify_1.SearchButton, { showLabel: true, showIcon: showIcons, editing: editing }),
                    react_1.default.createElement(shopify_1.CartButton, { showLabel: true, showIcon: showIcons, editing: editing })))),
            (enableAuth || enableShopify) && (react_1.default.createElement(material_1.Box, { sx: sx.divider },
                enableShopify && (react_1.default.createElement(shopify_1.ShopifyAuth, { showLabel: true, editing: editing })),
                enableAuth && (react_1.default.createElement(components_1.AuthButton, { showLabel: true, showIcon: showIcons, editing: editing, myAccountUrl: "".concat(clientUrl, "/my-account") })))))));
};
var Header = function (props) {
    var logo = (0, react_1.useContext)(context_1.AppContext).logo;
    var _a = props.topNav, topNav = _a === void 0 ? false : _a, _b = props.editing, editing = _b === void 0 ? false : _b, menuItems = props.menuItems, handleClick = props.handleClick, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d, _e = props.enableNotifications, enableNotifications = _e === void 0 ? false : _e, showIcons = props.showIcons;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (!topNav && sx.rootSideNav)) },
        topNav ? (react_1.default.createElement(DesktopTopNav, { editing: editing, logo: logo, enableAuth: enableAuth, enableShopify: enableShopify, enableNotifications: enableNotifications, menuItems: menuItems, handleClick: handleClick, showIcons: showIcons })) : (react_1.default.createElement(DesktopSideNav, { editing: editing, logo: logo, enableAuth: enableAuth, enableShopify: enableShopify, enableNotifications: enableNotifications, menuItems: menuItems, handleClick: handleClick, showIcons: showIcons })),
        react_1.default.createElement(MobileNav, { editing: editing, logo: logo, enableShopify: enableShopify, enableNotifications: enableNotifications, menuItems: menuItems, handleClick: handleClick, showIcons: showIcons }),
        react_1.default.createElement(MobileDrawer, { editing: editing, enableAuth: enableAuth, enableShopify: enableShopify, menuItems: menuItems, handleClick: handleClick, showIcons: showIcons })));
};
exports.default = Header;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        bgcolor: 'background.default',
    },
    rootSideNav: {
        width: {
            sm: '280px',
            xs: '100%',
        },
        minWidth: {
            sm: '280px',
            xs: '100%',
        },
    },
    appBar: {
        position: 'absolute',
        zIndex: function (theme) { return theme.zIndex.appBar; },
        bgcolor: 'background.default',
    },
    appBarNotifications: {
        position: 'absolute',
        top: 40,
    },
    toolbar: {},
    notifications: {
        top: '50px'
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
    desktopTopNav: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
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
        justifyContent: 'flex-start',
        bgcolor: 'background.default',
        color: 'text.primary',
    },
    mobileMenu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: 'calc(100vh - 70px)',
        width: {
            xs: '100%',
            sm: '320px',
        },
    },
    mobileMenuItems: {
        width: '100%'
    },
    divider: {
        width: "100%",
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 1.5
    }
};
