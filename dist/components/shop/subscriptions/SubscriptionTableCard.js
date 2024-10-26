'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var core_1 = require("../../core");
function SubscriptionTableCard(_a) {
    var _b;
    var _c = _a.buttonText, buttonText = _c === void 0 ? 'Subscribe' : _c, selected = _a.selected, handleClick = _a.handleClick, subscription = _a.subscription;
    return (react_1.default.createElement(frontend_shadcn_2.Card, { className: (0, frontend_shadcn_1.cn)('w-full max-w-sm', 'transition-all duration-300 ease-in-out', 'hover:shadow-lg') },
        react_1.default.createElement(frontend_shadcn_2.CardHeader, null,
            react_1.default.createElement("div", { className: "flex justify-between items-center" }, (subscription === null || subscription === void 0 ? void 0 : subscription.label) && (react_1.default.createElement(frontend_shadcn_3.Badge, { variant: "secondary" }, subscription.label))),
            react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "subtitle1" }, subscription === null || subscription === void 0 ? void 0 : subscription.name),
            react_1.default.createElement(core_1.Typography, { variant: "h4" }, subscription.display_price)),
        react_1.default.createElement(frontend_shadcn_2.CardContent, null,
            react_1.default.createElement("div", { className: "mt-2 space-y-4  min-h-[150px]" }, (_b = subscription === null || subscription === void 0 ? void 0 : subscription.features) === null || _b === void 0 ? void 0 : _b.map(function (feature, i) { return (react_1.default.createElement("div", { key: i, className: "flex items-start" },
                react_1.default.createElement(lucide_react_1.Check, { className: "w-5 h-5 mx-2 text-primary" }),
                react_1.default.createElement("span", { className: "text-sm" }, feature))); }))),
        react_1.default.createElement(frontend_shadcn_2.CardFooter, null,
            react_1.default.createElement(components_1.Button, { onClick: handleClick, className: "w-full" }, buttonText))));
}
exports.default = SubscriptionTableCard;
