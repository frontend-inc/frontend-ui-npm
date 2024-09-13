"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var MyAccountMenu = function (props) {
    var handleClick = (props || {}).handleClick;
    var _a = (0, hooks_1.useApp)(), enableShopify = _a.enableShopify, enableStripe = _a.enableStripe;
    var TABS = [
        { label: 'My Account', value: 0 }
    ];
    var SUBSCRIPTION_TAB = [
        {
            label: 'Subscription',
            value: 1,
        },
    ];
    var SHOPIFY_TAB = [
        {
            label: 'Order History',
            value: 2,
        },
    ];
    var tabs = TABS;
    if (enableStripe) {
        tabs = __spreadArray(__spreadArray([], tabs, true), SUBSCRIPTION_TAB, true);
    }
    if (enableShopify) {
        tabs = __spreadArray(__spreadArray([], tabs, true), SHOPIFY_TAB, true);
    }
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Box, { sx: sx.avatar },
            react_1.default.createElement(__1.UserAvatar, { user: currentUser, size: 96 })),
        react_1.default.createElement(material_1.List, { sx: sx.root, disablePadding: true }, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab, index) { return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, key: index, sx: sx.listItem, secondaryAction: react_1.default.createElement(material_1.Box, { mr: 2 },
                react_1.default.createElement(material_1.IconButton, null,
                    react_1.default.createElement(__1.Icon, { name: "ChevronRight", color: "text.primary" }))) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleClick(tab); } },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { sx: sx.menuItem, variant: "body1", color: "text.primary" }, tab === null || tab === void 0 ? void 0 : tab.label) })))); }))));
};
exports.default = MyAccountMenu;
var sx = {
    root: {
        p: 0,
    },
    listItem: {
        p: 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    menuItem: {
        pl: 2,
    },
    listItemButton: {
        py: 1,
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
    },
};
