'use client';
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
var __1 = require("../..");
var __2 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var helpers_1 = require("../../../helpers");
var SubscriptionPlan = function (props) {
    var popular = props.popular, title = props.title, subtitle = props.subtitle, features = props.features, _a = props.interval, interval = _a === void 0 ? 'month' : _a, _b = props.buttonText, buttonText = _b === void 0 ? 'Subscribe' : _b, price = props.price, compareAtPrice = props.compareAtPrice, path = props.path, url = props.url, handleClick = props.handleClick, _c = props.precision, precision = _c === void 0 ? 0 : _c, _d = props.variant, variant = _d === void 0 ? 'outline' : _d;
    var _e = (0, react_1.useState)(false), loading = _e[0], setLoading = _e[1];
    var onClick = (0, hooks_1.useNavigate)({
        path: path,
        url: url,
        handleClick: handleClick
    });
    var handleSubscribe = function () {
        setLoading(true);
        onClick();
        setTimeout(function () { return setLoading(false); }, 5000);
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full p-2 bg-background rounded-xl transition duration-200 flex flex-col space-y-4 justify-between', variant == 'outline' && 'border border-divider p-6', variant == 'fill' && 'bg-muted/50 p-6', popular && 'border-2 z-10 border-primary p-6') },
        react_1.default.createElement("div", { className: "flex flex-col space-y-8 min-h-[300px]" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                react_1.default.createElement(__1.Typography, { variant: "subtitle2" }, title),
                react_1.default.createElement(__1.Typography, { variant: "body2", className: 'text-foreground/70' }, subtitle)),
            react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
                react_1.default.createElement("div", { className: "flex flex-row space-x-4 w-full items-end" },
                    react_1.default.createElement("div", { className: "flex flex-row items-center space-x-1" },
                        react_1.default.createElement(__1.Typography, { variant: "h2", className: 'font-bold' }, price == 0 ? 'FREE' : (0, helpers_1.formatCurrency)(price, precision)),
                        price > 0 && (react_1.default.createElement(__1.Typography, { variant: "body2", className: 'text-xs text-foreground/70' },
                            "per",
                            react_1.default.createElement("br", null),
                            interval))),
                    compareAtPrice && (react_1.default.createElement(__1.Typography, { variant: "subtitle2", className: 'line-through text-foreground/70' }, compareAtPrice == 0 ? 'FREE' : (0, helpers_1.formatCurrency)(compareAtPrice, precision)))),
                price > 0 && (react_1.default.createElement(__1.Button, { size: 'lg', loading: loading, onClick: handleSubscribe }, buttonText)),
                react_1.default.createElement(__1.Typography, { variant: "body2", className: "text-foreground/70" }, "This includes:"),
                react_1.default.createElement("ul", { className: "flex flex-col space-y-3" }, features === null || features === void 0 ? void 0 : features.map(function (feature, i) { return (react_1.default.createElement("li", { className: "flex flex-row space-x-2", key: i },
                    react_1.default.createElement(__2.RemixIcon, { name: "ri-checkbox-circle-fill", className: "text-foreground" }),
                    react_1.default.createElement(__1.Typography, { variant: "body2" }, feature))); }))))));
};
exports.default = SubscriptionPlan;
