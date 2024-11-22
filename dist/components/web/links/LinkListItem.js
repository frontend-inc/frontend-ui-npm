"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_2 = require("frontend-shadcn");
var LinkListItem = function (props) {
    var fill = props.fill, border = props.border, color = props.color, icon = props.icon, title = props.title, subtitle = props.subtitle, action = props.action, path = props.path, url = props.url, src = props.src;
    var handleClick = (0, hooks_1.useButton)({
        action: action,
        path: path,
        url: url,
        src: src,
    }).handleClick;
    return (react_1.default.createElement("li", { className: "w-full" },
        react_1.default.createElement("button", { onClick: handleClick, className: (0, frontend_shadcn_2.cn)('w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-muted', fill && 'bg-muted p-6', border && 'border border-border rounded-lg') },
            react_1.default.createElement("div", { className: " flex flex-row space-x-6 items-center" },
                react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "rounded-lg" },
                    react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "rounded-lg bg-primary-500", style: {
                            backgroundColor: color,
                        } },
                        react_1.default.createElement(components_1.RemixIcon, { name: icon, className: "text-white" }))),
                react_1.default.createElement("div", { className: "flex flex-col space-y-0" },
                    react_1.default.createElement(components_1.Typography, { variant: "subtitle2" }, title),
                    react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-muted-foreground" }, subtitle))),
            react_1.default.createElement("i", { className: "ri-arrow-right-up-line text-xl rotate-[45] text-muted-foreground" }))));
};
exports.default = LinkListItem;
