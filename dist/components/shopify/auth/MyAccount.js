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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var webstudio_shopify_1 = require("webstudio-shopify");
var router_1 = require("next/router");
var lucide_react_1 = require("lucide-react");
var context_1 = require("../../../context");
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
var MyAccount = function (props) {
    var _a = props || {}, loginUrl = _a.loginUrl, _b = _a.title, title = _b === void 0 ? 'My Account' : _b, _c = _a.subtitle, subtitle = _c === void 0 ? 'Manage your account' : _c;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var customer = (0, webstudio_shopify_1.useAuth)().customer;
    var handleLogin = function () {
        router.push(loginUrl);
    };
    var handleClick = function (path) {
        router.push("".concat(clientUrl).concat(path));
    };
    return (react_1.default.createElement(components_1.AuthScreen, { title: title, subtitle: subtitle }, customer ? (react_1.default.createElement(material_1.List, { disablePadding: true }, MENU_ITEMS.map(function (item, i) { return (react_1.default.createElement(MenuItem, { key: i, item: item, handleClick: handleClick })); }))) : (react_1.default.createElement(components_1.Placeholder, { title: "Please sign in.", description: "You must be signed in to manage your account.", actions: react_1.default.createElement(material_1.Button, { onClick: handleLogin }, "Sign In") }))));
};
exports.default = MyAccount;
