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
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var frontend_shopify_1 = require("frontend-shopify");
var router_1 = require("next/router");
var TopNavMenuItem = function (props) {
    var _a;
    var router = (0, router_1.useRouter)();
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var children = menuItem.children;
    var _b = (0, frontend_shopify_1.useCollections)(), loading = _b.loading, products = _b.products, findCollection = _b.findCollection;
    var _c = (0, hooks_1.useMenu)(), open = _c.open, openMenu = _c.openMenu, closeMenu = _c.closeMenu, anchorEl = _c.anchorEl, toggleMenu = _c.toggleMenu;
    var handleCollectionClick = function () {
        router.push("/collections/".concat(menuItem === null || menuItem === void 0 ? void 0 : menuItem.shopify_handle));
        closeMenu();
    };
    var handleProductClick = function (product) {
        router.push("/products/".concat(menuItem === null || menuItem === void 0 ? void 0 : menuItem.shopify_handle));
        closeMenu();
    };
    var handleMenuClick = function (ev, menuItem) {
        if ((menuItem === null || menuItem === void 0 ? void 0 : menuItem.children.length) > 0) {
            toggleMenu(ev);
            return;
        }
        if ((menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'shopify_collection') {
            openMenu(ev);
            findCollection(menuItem === null || menuItem === void 0 ? void 0 : menuItem.shopify_handle);
            return;
        }
        else if ((menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'url') {
            closeMenu();
            window.open(menuItem.url, '_blank');
        }
        else {
            closeMenu();
            handleClick(menuItem.path);
        }
    };
    var handleMouseLeave = function () {
        closeMenu();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { sx: sx.menuButton, onClick: function (ev) { return handleMenuClick(ev, menuItem); }, endIcon: ((children === null || children === void 0 ? void 0 : children.length) > 0 ||
                (menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'shopify_collection') && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.icon), (open && sx.rotateIcon)) },
                react_1.default.createElement(components_1.Icon, { name: "ChevronDown" }))) }, menuItem.name),
        react_1.default.createElement(material_1.Menu, { open: open, anchorEl: anchorEl, onClose: closeMenu, MenuListProps: {
                onMouseLeave: handleMouseLeave,
            }, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center',
            } }, children === null || children === void 0 ? void 0 :
            children.map(function (child, index) { return (react_1.default.createElement(material_1.MenuItem, { key: index, 
                //@ts-ignore
                onClick: function (ev) { return handleMenuClick(ev, child); } },
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
