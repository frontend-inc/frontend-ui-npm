'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var lucide_react_1 = require("lucide-react");
var link_1 = __importDefault(require("next/link"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Breadcrumbs = function (_a) {
    var _b = _a.links, links = _b === void 0 ? [] : _b, _c = _a.maxLinks, maxLinks = _c === void 0 ? 2 : _c, className = _a.className;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    if (links.length === 0)
        return null;
    var visibleLinks = links.slice(-maxLinks);
    return (react_1.default.createElement("nav", { "aria-label": "breadcrumb", className: (0, frontend_shadcn_1.cn)('py-0', className) },
        react_1.default.createElement("ol", { className: "flex items-center space-x-2" },
            links.length > maxLinks && (react_1.default.createElement("li", { className: "flex items-center" },
                react_1.default.createElement("span", { className: "text-sm text-muted-foreground" }, "..."),
                react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4 text-muted-foreground mx-1" }))),
            visibleLinks.map(function (link, index) { return (react_1.default.createElement("li", { key: index, className: "flex items-center" },
                react_1.default.createElement(link_1.default, { href: "".concat(clientUrl).concat(link === null || link === void 0 ? void 0 : link.path), className: "text-sm text-muted-foreground hover:underline" }, link === null || link === void 0 ? void 0 : link.label),
                index < visibleLinks.length - 1 && (react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4 text-muted-foreground mx-1" })))); }))));
};
exports.default = Breadcrumbs;
