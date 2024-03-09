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
var icons_material_1 = require("@mui/icons-material");
var MobileSubmenuItem = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.ListItem, { sx: sx.subLink, disablePadding: true },
        react_1.default.createElement(material_1.ListItemButton, { onClick: function () { return handleClick(menuItem.path); } },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, menuItem.name) }))));
};
var MobileMenuItem = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var children = menuItem.children;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var handleMenuClick = function (menuItem) {
        if ((children === null || children === void 0 ? void 0 : children.length) > 0) {
            setOpen(!open);
        }
        else {
            handleClick(menuItem.path);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: (children === null || children === void 0 ? void 0 : children.length) > 0 && (react_1.default.createElement(material_1.IconButton, { onClick: function () { return handleMenuClick(menuItem); } },
                react_1.default.createElement(icons_material_1.ExpandMore, { sx: __assign(__assign({}, sx.icon), (open && sx.rotateIcon)) }))) },
            react_1.default.createElement(material_1.ListItemButton, { onClick: function () { return handleMenuClick(menuItem); } },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, menuItem.name) }))),
        react_1.default.createElement(material_1.Collapse, { in: open },
            react_1.default.createElement(material_1.List, null, children === null || children === void 0 ? void 0 : children.map(function (child, index) { return (react_1.default.createElement(MobileSubmenuItem, { key: index, menuItem: child, handleClick: handleClick })); })))));
};
exports.default = MobileMenuItem;
var sx = {
    icon: {
        transition: 'transform 0.2s ease-in-out',
    },
    rotateIcon: {
        transform: 'rotate(-180deg)',
    },
    subLink: {
        pl: 3,
    }
};
