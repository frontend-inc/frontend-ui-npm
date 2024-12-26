'use client';
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
var SubscriptionPlan_1 = __importDefault(require("./SubscriptionPlan"));
var __1 = require("../..");
var SubscriptionPlans = function (props) {
    var _a = props || {}, items = _a.items, precision = _a.precision, variant = _a.variant, handleClick = _a.handleClick;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 p-3" },
        react_1.default.createElement(__1.Stack, { direction: "row", spacing: 4 }, items === null || items === void 0 ? void 0 : items.map(function (item, index) { return (react_1.default.createElement(SubscriptionPlan_1.default, __assign({ key: index, precision: precision, variant: variant, handleClick: handleClick ? function () { return handleClick(item); } : undefined }, item))); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-bank-card-fill", title: "No subscription plans", description: "Subscription plans will appear here." }))));
};
exports.default = SubscriptionPlans;
