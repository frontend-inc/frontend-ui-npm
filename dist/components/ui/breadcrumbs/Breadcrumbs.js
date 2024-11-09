'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_shadcn_1 = require("frontend-shadcn");
var Breadcrumbs = function (_a) {
    var _b = _a.links, links = _b === void 0 ? [] : _b, className = _a.className;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    if (links.length === 0)
        return null;
    return (react_1.default.createElement(frontend_shadcn_1.Breadcrumb, null,
        react_1.default.createElement(frontend_shadcn_1.BreadcrumbList, null, links.map(function (link, index) { return (react_1.default.createElement(frontend_shadcn_1.BreadcrumbItem, { key: index },
            react_1.default.createElement(frontend_shadcn_1.BreadcrumbLink, { href: "".concat(clientUrl).concat(link === null || link === void 0 ? void 0 : link.path) }, link === null || link === void 0 ? void 0 : link.label),
            index < links.length - 1 && react_1.default.createElement(frontend_shadcn_1.BreadcrumbSeparator, null))); }))));
};
exports.default = Breadcrumbs;
