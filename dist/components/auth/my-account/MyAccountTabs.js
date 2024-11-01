'use client';
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
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var MyAccountTabs = function (_a) {
    var handleClick = _a.handleClick;
    var _b = (0, hooks_1.useApp)(), enableShopify = _b.enableShopify, enableStripe = _b.enableStripe;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var TABS = [{ label: 'My Account', value: 1 }];
    var SUBSCRIPTION_TAB = [
        {
            label: 'Manage Billing',
            value: 2,
        },
    ];
    var SHOPIFY_TAB = [
        {
            label: 'Order History',
            value: 3,
        },
    ];
    var LOGOUT_TAB = [
        {
            label: 'Logout',
            value: 4,
        }
    ];
    var tabs = TABS;
    if (enableStripe) {
        tabs = __spreadArray(__spreadArray([], tabs, true), SUBSCRIPTION_TAB, true);
    }
    if (enableShopify) {
        tabs = __spreadArray(__spreadArray([], tabs, true), SHOPIFY_TAB, true);
    }
    tabs = __spreadArray(__spreadArray([], tabs, true), LOGOUT_TAB, true);
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement("div", { className: "flex justify-center items-center p-4" },
            react_1.default.createElement(__1.UserAvatar, { variant: "circular", user: currentUser, size: 64 })),
        react_1.default.createElement("ul", { className: "divide-y divide-border" }, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab, index) { return (react_1.default.createElement("li", { key: index },
            react_1.default.createElement(components_1.Button, { variant: "ghost", className: "w-full justify-between py-3 px-4 text-left", onClick: function () { return handleClick(tab); } },
                react_1.default.createElement("span", { className: "text-sm font-medium" }, tab === null || tab === void 0 ? void 0 : tab.label),
                react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" })))); }))));
};
exports.default = MyAccountTabs;
