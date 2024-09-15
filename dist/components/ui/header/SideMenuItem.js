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
var __1 = require("../..");
var frontend_shopify_1 = require("frontend-shopify");
var router_1 = require("next/router");
var SublinkMenuItem = function (props) {
    var label = props.label, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.ListItem, { sx: sx.subLink, disablePadding: true },
        react_1.default.createElement(material_1.ListItemButton, { onClick: handleClick },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, label) }))));
};
var SideNavMenuItem = function (props) {
    var _a;
    var router = (0, router_1.useRouter)();
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var children = menuItem.children;
    var _c = (0, frontend_shopify_1.useCollections)(), loading = _c.loading, products = _c.products, findCollections = _c.findCollections;
    var handleListClick = function () {
        router.push("/collections/".concat(menuItem === null || menuItem === void 0 ? void 0 : menuItem.shopify_handle));
        setOpen(false);
    };
    var handleProductClick = function (product) {
        router.push("/products/".concat(menuItem === null || menuItem === void 0 ? void 0 : menuItem.shopify_handle));
        setOpen(false);
    };
    var handleMenuClick = function (menuItem) {
        var _a;
        if (((_a = menuItem === null || menuItem === void 0 ? void 0 : menuItem.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            setOpen(!open);
            return;
        }
        if ((menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'shopify_collection') {
            setOpen(false);
            findCollections(menuItem === null || menuItem === void 0 ? void 0 : menuItem.shopify_handle);
            return;
        }
        else if ((menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'url') {
            window.open(menuItem.url, '_blank');
        }
        else {
            handleClick(menuItem.path);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: ((children === null || children === void 0 ? void 0 : children.length) > 0 ||
                (menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'shopify_collection') && (react_1.default.createElement(material_1.IconButton, { sx: __assign(__assign({}, sx.icon), (open && sx.rotateIcon)), onClick: function () { return handleMenuClick(menuItem); } },
                react_1.default.createElement(__1.Icon, { name: "ChevronDown" }))) },
            react_1.default.createElement(material_1.ListItemButton, { onClick: function () { return handleMenuClick(menuItem); } },
                (menuItem === null || menuItem === void 0 ? void 0 : menuItem.icon) && (react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(__1.Icon, { name: menuItem.icon, size: 24 }))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, menuItem.label) }))),
        react_1.default.createElement(material_1.Collapse, { in: open },
            react_1.default.createElement(material_1.List, null, children === null || children === void 0 ? void 0 :
                children.map(function (child, index) { return (react_1.default.createElement(SublinkMenuItem, { key: index, label: child.name, handleClick: function () { return handleMenuClick(child); } })); }),
                loading && (react_1.default.createElement(material_1.Box, { sx: sx.loading },
                    react_1.default.createElement(material_1.CircularProgress, { size: 30 }))), (_a = products === null || products === void 0 ? void 0 : products.slice(0, 5)) === null || _a === void 0 ? void 0 :
                _a.map(function (product, i) { return (react_1.default.createElement(SublinkMenuItem, { label: product.title, handleClick: function () { return handleProductClick(product); } })); }),
                (products === null || products === void 0 ? void 0 : products.length) > 5 && (react_1.default.createElement(SublinkMenuItem, { label: "See all", handleClick: handleListClick }))))));
};
exports.default = SideNavMenuItem;
var sx = {
    icon: {
        transition: 'transform 0.2s ease-in-out',
    },
    rotateIcon: {
        transform: 'rotate(-180deg)',
    },
    subLink: {
        pl: 1,
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
    },
};
