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
var react_2 = require("@nextui-org/react");
var __2 = require("../..");
var react_3 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
var helpers_1 = require("../../../helpers");
var SubscriptionPlan = function (props) {
    var popular = props.popular, title = props.title, subtitle = props.subtitle, features = props.features, _a = props.interval, interval = _a === void 0 ? 'month' : _a, _b = props.buttonText, buttonText = _b === void 0 ? 'Subscribe' : _b, price = props.price, compareAtPrice = props.compareAtPrice, path = props.path, url = props.url, handleClick = props.handleClick, _c = props.precision, precision = _c === void 0 ? 0 : _c;
    var _d = (0, react_1.useState)(false), loading = _d[0], setLoading = _d[1];
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
    return (react_1.default.createElement(react_2.Card, { shadow: "sm", className: (0, react_3.cn)('w-full bg-background') },
        react_1.default.createElement(react_2.CardHeader, { className: "flex flex-col p-6 justify-start items-start space-y-1" },
            react_1.default.createElement(__1.Typography, { variant: "subtitle2" }, title),
            react_1.default.createElement(__1.Typography, { variant: "body2", className: 'text-foreground/70' }, subtitle)),
        react_1.default.createElement(react_2.CardBody, { className: "flex flex-col space-y-4 p-6 w-full min-h-[300px]" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-4 w-full items-end" },
                react_1.default.createElement("div", { className: "flex flex-row items-center space-x-1" },
                    react_1.default.createElement(__1.Typography, { variant: "h2", className: 'font-bold' }, price == 0 ? 'FREE' : (0, helpers_1.formatCurrency)(price, precision)),
                    price > 0 && (react_1.default.createElement(__1.Typography, { variant: "body2", className: 'text-xs text-foreground/70' },
                        "per",
                        react_1.default.createElement("br", null),
                        interval))),
                compareAtPrice && (react_1.default.createElement(__1.Typography, { variant: "subtitle2", className: 'line-through text-foreground/70' }, compareAtPrice == 0 ? 'FREE' : (0, helpers_1.formatCurrency)(compareAtPrice, precision)))),
            price > 0 && (react_1.default.createElement(react_2.Button, { variant: "solid", color: "primary", isLoading: loading, onPress: handleSubscribe }, buttonText)),
            react_1.default.createElement(__1.Typography, { variant: "body2", className: "text-foreground/70" }, "This includes:"),
            react_1.default.createElement("ul", { className: "flex flex-col space-y-3" }, features === null || features === void 0 ? void 0 : features.map(function (feature, i) { return (react_1.default.createElement("li", { className: "flex flex-row space-x-2", key: i },
                react_1.default.createElement(__2.RemixIcon, { name: "ri-checkbox-circle-fill", className: "text-foreground" }),
                react_1.default.createElement(__1.Typography, { variant: "body2" }, feature))); })))));
};
exports.default = SubscriptionPlan;
