'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var FooterLinks = function (_a) {
    var menuItem = _a.menuItem, handleClick = _a.handleClick;
    var children = (menuItem || {}).children;
    return (react_1.default.createElement("nav", { className: "min-w-[150px] w-full sm:w-auto" },
        react_1.default.createElement("h3", { className: "mb-2 text-sm font-semibold text-foreground" }, menuItem === null || menuItem === void 0 ? void 0 : menuItem.label),
        react_1.default.createElement("ul", { className: "space-y-2" }, children === null || children === void 0 ? void 0 : children.map(function (link, i) { return (react_1.default.createElement("li", { key: i },
            react_1.default.createElement(link_1.default, { href: link.path || '#', onClick: function (e) {
                    e.preventDefault();
                    handleClick(link.path);
                }, className: "text-sm text-foreground/70 hover:text-foreground transition-colors duration-200" }, link.label))); }))));
};
exports.default = FooterLinks;
