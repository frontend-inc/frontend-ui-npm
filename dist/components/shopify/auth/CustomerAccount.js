"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_shopify_1 = require("frontend-shopify");
var router_1 = require("next/router");
var lucide_react_1 = require("lucide-react");
var hooks_1 = require("../../../hooks");
var MenuItem = function (props) {
    var _a = props || {}, item = _a.item, handleClick = _a.handleClick;
    return (react_1.default.createElement(material_1.ListItem, { disablePadding: true },
        react_1.default.createElement(material_1.ListItemButton, { onClick: function () { return handleClick(item === null || item === void 0 ? void 0 : item.path); } },
            react_1.default.createElement(material_1.ListItemIcon, null, item.icon),
            react_1.default.createElement(material_1.ListItemText, { primary: item.label }))));
};
var MENU_ITEMS = [
    {
        label: 'Account Details',
        path: '/shopify/customer',
        icon: react_1.default.createElement(lucide_react_1.User, null),
    },
    {
        label: 'Addresses',
        path: '/shopify/addresses',
        icon: react_1.default.createElement(lucide_react_1.MapPin, null),
    },
    {
        label: 'Order History',
        path: '/shopify/orders',
        icon: react_1.default.createElement(lucide_react_1.ShoppingCart, null),
    },
    {
        label: 'Sign Out',
        path: '/logout',
        icon: react_1.default.createElement(lucide_react_1.LogOut, null),
    },
];
var CustomerAccount = function (props) {
    var _a = props || {}, loginUrl = _a.loginUrl, _b = _a.title, title = _b === void 0 ? 'My Account' : _b, _c = _a.subtitle, subtitle = _c === void 0 ? 'Manage your account' : _c;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var customer = (0, frontend_shopify_1.useAuth)().customer;
    var handleLogin = function () {
        router.push(loginUrl);
    };
    var handleClick = function (path) {
        router.push("".concat(clientUrl).concat(path));
    };
    return (react_1.default.createElement(__1.AuthScreen, { title: title, subtitle: subtitle }, customer ? (react_1.default.createElement(material_1.List, { disablePadding: true }, MENU_ITEMS.map(function (item, i) { return (react_1.default.createElement(MenuItem, { key: i, item: item, handleClick: handleClick })); }))) : (react_1.default.createElement(__1.Placeholder, { title: "Please sign in.", description: "You must be signed in to manage your account.", buttons: react_1.default.createElement(material_1.Button, { onClick: handleLogin }, "Sign In") }))));
};
exports.default = CustomerAccount;
