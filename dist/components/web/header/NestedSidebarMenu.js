'use client';
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizeLinks = void 0;
var react_1 = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var react_2 = require("@nextui-org/react");
function organizeLinks(links) {
    var linkMap = new Map();
    var rootLinks = [];
    // First pass: create NestedLink objects
    links.forEach(function (link) {
        linkMap.set(link.id, __assign(__assign({}, link), { children: [] }));
    });
    // Second pass: organize into a tree structure
    links.forEach(function (link) {
        var nestedLink = linkMap.get(link.id);
        if (link.parent_id === null) {
            rootLinks.push(nestedLink);
        }
        else {
            var parent_1 = linkMap.get(link.parent_id);
            if (parent_1) {
                //@ts-ignore
                parent_1.children.push(nestedLink);
            }
        }
    });
    // Sort root links and their children recursively
    var sortLinks = function (links) {
        links.sort(function (a, b) { return a.position - b.position; });
        links.forEach(function (link) { return sortLinks(link.children); });
    };
    sortLinks(rootLinks);
    return rootLinks;
}
exports.organizeLinks = organizeLinks;
function RenderLink(_a) {
    var link = _a.link, handleClick = _a.handleClick;
    var hasChildren = link.children.length > 0;
    // Local state to manage collapsible behavior
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var onClickHandler = function (event) {
        if (hasChildren) {
            // Prevent navigation and toggle children display
            event.preventDefault();
            setIsOpen(!isOpen);
        }
        else {
            handleClick((link === null || link === void 0 ? void 0 : link.url) || (link === null || link === void 0 ? void 0 : link.path));
        }
    };
    return (react_1.default.createElement("li", { key: link.id, className: "list-none" },
        react_1.default.createElement("button", { onClick: onClickHandler, className: "flex w-full items-center justify-between \n          rounded-md p-2 text-left text-md font-medium text-foreground\n          transition-colors hover:bg-content2 focus:outline-none", "aria-expanded": hasChildren ? isOpen : undefined },
            react_1.default.createElement("div", { className: "flex flex-col text-left" },
                react_1.default.createElement("span", null, link.label),
                link.description && (react_1.default.createElement("span", { className: "text-xs text-foreground/70" }, link.description))),
            hasChildren && (react_1.default.createElement(lucide_react_1.ChevronDown, { className: (0, react_2.cn)('h-4 w-4 transition-transform', isOpen && 'rotate-180') }))),
        hasChildren && isOpen && (react_1.default.createElement("ul", { className: "ml-4 mt-1 space-y-1 w-full pl-2" }, link.children.map(function (child) { return (react_1.default.createElement(RenderLink, { key: child.id, link: child, handleClick: handleClick })); })))));
}
function NestedSidebarMenu(_a) {
    var links = _a.links, handleClick = _a.handleClick;
    return (react_1.default.createElement("nav", { className: "w-full py-2" },
        react_1.default.createElement("ul", { className: "flex flex-col space-y-2 w-full" }, links.map(function (link) { return (react_1.default.createElement(RenderLink, { key: link.id, link: link, handleClick: handleClick })); }))));
}
exports.default = NestedSidebarMenu;
