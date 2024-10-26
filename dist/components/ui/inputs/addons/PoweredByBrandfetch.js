'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
function PoweredByBrandfetch() {
    return (react_1.default.createElement("div", { className: "flex items-start justify-center space-x-1" },
        react_1.default.createElement("div", { className: "text-sm text-muted-foreground" }, "Powered by"),
        react_1.default.createElement(link_1.default, { href: "https://brandfetch.io", target: "_blank", rel: "noopener noreferrer", className: "text-sm hover:underline flex items-center text-foreground" }, "Brandfetch")));
}
exports.default = PoweredByBrandfetch;
