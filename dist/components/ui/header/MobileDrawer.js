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
var material_1 = require("@mui/material");
var __1 = require("../..");
var shopify_1 = require("../../shopify");
var context_1 = require("../../../context");
var SideMenuItem_1 = __importDefault(require("./SideMenuItem"));
var MobileDrawer = function (props) {
    var _a = (0, react_1.useContext)(context_1.AppContext), menuOpen = _a.menuOpen, setMenuOpen = _a.setMenuOpen;
    var links = props.links, handleClick = props.handleClick, enableAuth = props.enableAuth, enableStripe = props.enableStripe, enableShopify = props.enableShopify;
    var handleMenuClick = function (path) {
        setMenuOpen(false);
        handleClick(path);
    };
    return (react_1.default.createElement(__1.Drawer, { open: menuOpen, handleClose: function () { return setMenuOpen(false); }, anchor: "left", styles: sx.drawer },
        react_1.default.createElement(material_1.Box, { sx: sx.sideNavMenu },
            react_1.default.createElement(material_1.List, { sx: sx.sideNavMenuItems }, links === null || links === void 0 ? void 0 : links.map(function (menuItem, index) { return (react_1.default.createElement(SideMenuItem_1.default, { key: index, menuItem: menuItem, handleClick: handleMenuClick })); })),
            (enableAuth || enableShopify) && (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
                enableStripe && react_1.default.createElement(__1.CartButton, { variant: "button" }),
                enableShopify && react_1.default.createElement(shopify_1.ShopifyCartButton, { variant: "button" }),
                enableAuth && (react_1.default.createElement(material_1.Box, { sx: sx.divider },
                    react_1.default.createElement(__1.AuthButton, { showLabel: true }))))))));
};
exports.default = MobileDrawer;
var sx = {
    drawer: {
        bgcolor: 'background.default',
    },
    menuButton: {
        justifyContent: 'flex-start',
        bgcolor: 'background.default',
        color: 'text.primary',
    },
    sideNavMenu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'calc(100vh - 100px)',
        width: '100%',
    },
    sideNavMenuItems: {
        width: '100%',
    },
    divider: {
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 1.5,
    },
};
