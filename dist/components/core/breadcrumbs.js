'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var Breadcrumbs = function (_a) {
    var links = _a.links, className = _a.className;
    return (react_1.default.createElement(frontend_shadcn_1.Breadcrumb, null,
        react_1.default.createElement(frontend_shadcn_1.BreadcrumbList, { className: className }, links === null || links === void 0 ? void 0 : links.map(function (link, index) { return (react_1.default.createElement(frontend_shadcn_1.BreadcrumbItem, { key: index }, index == (links === null || links === void 0 ? void 0 : links.length) - 1 ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(frontend_shadcn_1.BreadcrumbLink, { href: link === null || link === void 0 ? void 0 : link.value }, link === null || link === void 0 ? void 0 : link.label),
            react_1.default.createElement(frontend_shadcn_1.BreadcrumbSeparator, null,
                react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" })))) : (react_1.default.createElement(frontend_shadcn_1.BreadcrumbPage, null, link === null || link === void 0 ? void 0 : link.label)))); }))));
};
exports.Breadcrumbs = Breadcrumbs;
