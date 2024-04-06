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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var frontend_shopify_1 = require("frontend-shopify");
var router_1 = require("next/router");
var TopNavSubmenuItem = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.MenuItem
    // @ts-ignore
    , { 
        // @ts-ignore
        onClick: function () { return handleClick(menuItem.path); } },
        react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, menuItem.name)));
};
var TopNavMenuItem = function (props) {
    var _a;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var children = menuItem.children, shopify_collection = menuItem.shopify_collection;
    var _b = (0, frontend_shopify_1.useCollections)(), loading = _b.loading, products = _b.products, findCollection = _b.findCollection;
    var _c = (0, hooks_1.useMenu)(), open = _c.open, openMenu = _c.openMenu, closeMenu = _c.closeMenu, anchorEl = _c.anchorEl;
    var handleCollectionClick = function () {
        router.push("".concat(clientUrl, "/collections/").concat(shopify_collection));
        closeMenu();
    };
    var handleProductClick = function (product) {
        router.push("".concat(clientUrl, "/products/").concat(product.handle));
        closeMenu();
    };
    var handleMenuClick = function (ev) {
        if ((children === null || children === void 0 ? void 0 : children.length) > 0 || shopify_collection) {
            openMenu(ev);
        }
        else {
            closeMenu();
            handleClick(menuItem.path);
        }
        if (shopify_collection && !products) {
            findCollection(shopify_collection);
        }
    };
    var handleMouseLeave = function () {
        closeMenu();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { sx: sx.menuButton, onClick: handleMenuClick, endIcon: ((children === null || children === void 0 ? void 0 : children.length) > 0 || shopify_collection) && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.icon), (open && sx.rotateIcon)) },
                react_1.default.createElement(__1.Icon, { name: "ChevronDown" }))) }, menuItem.name),
        react_1.default.createElement(material_1.Menu, { open: open, anchorEl: anchorEl, onClose: closeMenu, MenuListProps: {
                onMouseLeave: handleMouseLeave,
            }, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center',
            } }, children === null || children === void 0 ? void 0 :
            children.map(function (child, index) { return (react_1.default.createElement(material_1.MenuItem
            //@ts-ignore
            , { 
                //@ts-ignore
                onClick: function () { return handleClick(child.path); } },
                react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, child.name))); }),
            loading && (react_1.default.createElement(material_1.Box, { sx: sx.loading },
                react_1.default.createElement(material_1.CircularProgress, { size: 30 }))), (_a = products === null || products === void 0 ? void 0 : products.slice(0, 5)) === null || _a === void 0 ? void 0 :
            _a.map(function (product, i) { return (react_1.default.createElement(material_1.MenuItem, { key: i, onClick: function () { return handleProductClick(product); } },
                react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, product.title))); }),
            (products === null || products === void 0 ? void 0 : products.length) > 5 && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(material_1.Divider, null),
                react_1.default.createElement(material_1.MenuItem, { onClick: handleCollectionClick },
                    react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, "See All")))))));
};
exports.default = TopNavMenuItem;
var sx = {
    menuButton: {
        cursor: 'pointer',
        justifyContent: 'flex-start',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRight: 'none !important',
    },
    iconButton: {
        '&:hover': {
            bgcolor: 'transparent',
        },
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'text.primary',
        transition: 'transform 0.2s ease-in-out',
    },
    rotateIcon: {
        transform: 'rotate(-180deg)',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
    },
};
