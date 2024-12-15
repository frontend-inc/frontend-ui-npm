'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var helpers_1 = require("../../../helpers");
var SubscriptionPlan = function (props) {
    var popular = props.popular, title = props.title, subtitle = props.subtitle, features = props.features, _a = props.interval, interval = _a === void 0 ? 'month' : _a, _b = props.buttonText, buttonText = _b === void 0 ? 'Subscribe' : _b, price = props.price, compareAtPrice = props.compareAtPrice, path = props.path, url = props.url, handleClick = props.handleClick, _c = props.precision, precision = _c === void 0 ? 0 : _c, _d = props.variant, variant = _d === void 0 ? 'outline' : _d;
    var onClick = (0, hooks_1.useNavigate)({
        path: path,
        url: url,
        handleClick: handleClick
    });
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full p-2 bg-background rounded-xl transition duration-200 flex flex-col space-y-4 justify-between', variant == 'outline' && 'border border-divider p-6', variant == 'fill' && 'bg-muted-background/50 p-6', popular && 'border-2 z-10 border-primary p-6') },
        react_1.default.createElement("div", { className: "flex flex-col space-y-8 min-h-[300px]" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                react_1.default.createElement(__1.Typography, { variant: "subtitle2" }, title),
                react_1.default.createElement(__1.Typography, { variant: "body2", className: 'text-foreground/70' }, subtitle)),
            react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
                react_1.default.createElement("div", { className: "flex flex-row space-x-4 w-full items-end" },
                    react_1.default.createElement("div", { className: "flex flex-row items-center space-x-1" },
                        react_1.default.createElement(__1.Typography, { variant: "h3", className: 'font-bold' }, price == 0 ? 'FREE' : (0, helpers_1.formatCurrency)(price, precision)),
                        react_1.default.createElement(__1.Typography, { variant: "body2", className: 'text-xs text-foreground/70' },
                            "per",
                            react_1.default.createElement("br", null),
                            interval)),
                    compareAtPrice && (react_1.default.createElement(__1.Typography, { variant: "subtitle2", className: 'line-through text-foreground/70' }, compareAtPrice == 0 ? 'FREE' : (0, helpers_1.formatCurrency)(compareAtPrice, precision)))),
                react_1.default.createElement(__1.Button, { size: 'lg', 
                    //@ts-ignore
                    onClick: onClick }, buttonText),
                react_1.default.createElement(__1.Typography, { variant: "body2", className: "text-foreground/70" }, "This includes:"),
                react_1.default.createElement("ul", { className: "flex flex-col space-y-3" }, features === null || features === void 0 ? void 0 : features.map(function (feature, i) { return (react_1.default.createElement("li", { className: "flex flex-row space-x-2", key: i },
                    react_1.default.createElement(__2.RemixIcon, { name: "ri-checkbox-circle-fill", className: "text-foreground bg-background" }),
                    react_1.default.createElement(__1.Typography, { variant: "body2" }, feature))); }))))));
};
exports.default = SubscriptionPlan;
