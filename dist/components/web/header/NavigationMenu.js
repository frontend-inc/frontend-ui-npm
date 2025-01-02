"use client";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationMenu = void 0;
var React = __importStar(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
function NavigationMenu(_a) {
    var links = _a.links, handleClick = _a.handleClick;
    return (React.createElement(frontend_shadcn_2.NavigationMenu, null,
        React.createElement(frontend_shadcn_2.NavigationMenuList, null, links.map(function (node) { return (React.createElement(React.Fragment, { key: node.id },
            React.createElement(MenuNode, { node: node, handleClick: handleClick }))); }))));
}
exports.NavigationMenu = NavigationMenu;
function MenuNode(_a) {
    var node = _a.node, handleClick = _a.handleClick;
    var hasChildren = node.children && node.children.length > 0;
    return (React.createElement(frontend_shadcn_2.NavigationMenuItem, null, hasChildren ? (React.createElement(React.Fragment, null,
        React.createElement(frontend_shadcn_2.NavigationMenuTrigger, null,
            React.createElement("span", { className: "text-md font-medium text-foreground" }, node.label)),
        React.createElement(frontend_shadcn_2.NavigationMenuContent, null,
            React.createElement("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px]" }, node.children.map(function (child) { return (React.createElement(ListItem, { key: child.id, href: child.url, title: child.label, onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick((child === null || child === void 0 ? void 0 : child.url) || (child === null || child === void 0 ? void 0 : child.path)); } }, child.description)); }))))) : (React.createElement(frontend_shadcn_2.NavigationMenuLink, { className: (0, frontend_shadcn_2.navigationMenuTriggerStyle)(), onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick((node === null || node === void 0 ? void 0 : node.url) || (node === null || node === void 0 ? void 0 : node.path)); } },
        React.createElement("span", { className: "text-md font-medium text-primary" }, node.label)))));
}
var ListItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, title = _a.title, children = _a.children, props = __rest(_a, ["className", "title", "children"]);
    return (React.createElement("li", null,
        React.createElement(frontend_shadcn_2.NavigationMenuLink, { asChild: true },
            React.createElement("a", __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors " +
                    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className) }, props),
                React.createElement("div", { className: "flex flex-row space-x-2" },
                    React.createElement("div", { className: "flex flex-col space-y-1" },
                        title && (React.createElement("div", { className: "text-sm text-foreground font-medium leading-none" }, title)),
                        children && (React.createElement("p", { className: "line-clamp-2 text-sm leading-snug text-foreground/70" }, children))))))));
});
ListItem.displayName = "ListItem";
