'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../..");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var core_1 = require("../../core");
function SubscriptionCard(props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, label = props.label, price = props.price, title = props.title, subtitle = props.subtitle, description = props.description, _b = props.buttonText, buttonText = _b === void 0 ? 'Subscribe' : _b, handleClick = props.handleClick;
    return (react_1.default.createElement(frontend_shadcn_2.Card, { className: (0, frontend_shadcn_1.cn)('w-full max-w-sm', 'transition-all duration-300 ease-in-out', 'hover:shadow-lg') },
        react_1.default.createElement(frontend_shadcn_2.CardHeader, null,
            react_1.default.createElement("div", { className: "w-full flex flex-col space-y-3 justify-center items-center" },
                label && (react_1.default.createElement(frontend_shadcn_3.Badge, { variant: "secondary", className: "uppercase text-xs tracking-wider" }, label)),
                react_1.default.createElement(core_1.Typography, { className: "text-foreground text-center w-full", variant: "h5" }, title),
                react_1.default.createElement(core_1.Typography, { variant: "h3", className: "text-center w-full" }, price))),
        react_1.default.createElement(frontend_shadcn_2.CardContent, { className: "p-4" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
                react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "body1" }, subtitle),
                react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "body2" }, description))),
        react_1.default.createElement(frontend_shadcn_2.CardFooter, null,
            react_1.default.createElement(__1.Button, { loading: loading, onClick: handleClick, className: "w-full" },
                buttonText,
                " ",
                price))));
}
exports.default = SubscriptionCard;
