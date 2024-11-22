"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_1 = require("frontend-shadcn");
var PriceListItem = function (props) {
    var fill = props.fill, border = props.border, image = props.image, price = props.price, title = props.title, subtitle = props.subtitle, action = props.action, path = props.path, url = props.url, src = props.src;
    var handleClick = (0, hooks_1.useButton)({
        action: action,
        path: path,
        url: url,
        src: src,
    }).handleClick;
    return (react_1.default.createElement("li", { className: 'w-full' },
        react_1.default.createElement("button", { onClick: handleClick, className: (0, frontend_shadcn_1.cn)('w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-muted', fill && 'bg-muted p-6 rounded-lg', border && 'border border-border p-6 rounded-lg') },
            react_1.default.createElement("div", { className: " flex flex-row space-x-6 items-center" },
                image && (react_1.default.createElement("div", { className: "h-12 w-12" },
                    react_1.default.createElement(__1.Image, { src: image, alt: title, height: 72 }))),
                react_1.default.createElement("div", { className: "flex flex-col space-y-0" },
                    react_1.default.createElement(__1.Typography, { variant: "subtitle1", className: "font-medium" }, title),
                    react_1.default.createElement(__1.Typography, { variant: "body2", className: "text-muted-foreground" }, subtitle))),
            react_1.default.createElement(__1.Typography, { variant: "body2", className: "text-muted-foreground" }, price))));
};
exports.default = PriceListItem;
