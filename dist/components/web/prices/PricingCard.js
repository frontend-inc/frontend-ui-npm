'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var components_2 = require("../../../components");
var frontend_shadcn_3 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var PricingCard = function (props) {
    var popular = props.popular, label = props.label, title = props.title, features = props.features, _a = props.recurring, recurring = _a === void 0 ? false : _a, _b = props.interval, interval = _b === void 0 ? 'month' : _b, _c = props.buttonText, buttonText = _c === void 0 ? 'Subscribe' : _c, price = props.price, path = props.path, url = props.url;
    var onClick = (0, hooks_1.useNavigate)({
        path: path,
        url: url,
    });
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_3.cn)('w-full border bg-background shadow-lg border-divider rounded-xl p-6 flex flex-col space-y-4 justify-between', popular &&
            'border-2 z-10 border-primary shadow-3xl transition duration-200') },
        react_1.default.createElement("div", { className: "flex flex-col space-y-3 min-h-[300px]" },
            label && (react_1.default.createElement("div", null,
                react_1.default.createElement(frontend_shadcn_1.Badge, { className: "px-3 py-1", variant: "outline" }, label))),
            react_1.default.createElement(components_1.Typography, { variant: "body1" }, title),
            react_1.default.createElement("div", { className: "flex flex-row items-end" },
                react_1.default.createElement(components_1.Typography, { variant: "h2" },
                    "$",
                    price),
                recurring && react_1.default.createElement(components_1.Typography, { variant: "h4" },
                    "/",
                    interval)),
            react_1.default.createElement(frontend_shadcn_2.Separator, null),
            react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-muted-foreground" }, "What's included:"),
            react_1.default.createElement("ul", { className: "flex flex-col space-y-3" }, features === null || features === void 0 ? void 0 : features.map(function (feature, i) { return (react_1.default.createElement("li", { className: "flex flex-row space-x-2", key: i },
                react_1.default.createElement(components_2.RemixIcon, { name: 'ri-check-fill', className: "text-foreground bg-background" }),
                react_1.default.createElement(components_1.Typography, { variant: "body1" }, feature))); }))),
        react_1.default.createElement(components_1.Button, { onClick: onClick }, buttonText)));
};
exports.default = PricingCard;
