"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var react_2 = require("@nextui-org/react");
var LinkListItem = function (props) {
    var variant = props.variant, color = props.color, icon = props.icon, title = props.title, subtitle = props.subtitle, path = props.path, url = props.url;
    var onClick = (0, hooks_1.useNavigate)({
        path: path,
        url: url,
    });
    return (react_1.default.createElement("li", { className: "w-full" },
        react_1.default.createElement("button", { 
            //@ts-ignore
            onClick: onClick, className: (0, react_2.cn)('w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-content2', variant === 'fill' && 'bg-content1 p-6', variant === 'outline' && 'border border-divider rounded-lg') },
            react_1.default.createElement("div", { className: " flex flex-row space-x-6 items-center" },
                react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "rounded-lg" },
                    react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "rounded-lg bg-primary-500", style: {
                            backgroundColor: color,
                        } },
                        react_1.default.createElement(components_1.RemixIcon, { name: icon, className: "text-white" }))),
                react_1.default.createElement("div", { className: "flex flex-col space-y-0" },
                    react_1.default.createElement(components_1.Typography, { variant: "subtitle2" }, title),
                    react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-foreground/70" }, subtitle))),
            react_1.default.createElement("i", { className: "ri-arrow-right-up-line text-xl rotate-[45] text-foreground/70" }))));
};
exports.default = LinkListItem;
