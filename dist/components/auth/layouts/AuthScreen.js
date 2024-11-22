'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
function AuthScreen(_a) {
    var title = _a.title, subtitle = _a.subtitle, children = _a.children;
    return (react_1.default.createElement(frontend_shadcn_1.Card, { className: "w-full rounded-lg bg-background" },
        react_1.default.createElement(frontend_shadcn_1.CardContent, { className: "space-y-4 p-4 sm:p-6" },
            react_1.default.createElement("div", { className: "space-y-2" },
                react_1.default.createElement(components_1.Typography, { variant: "h4", className: "text-center font-bold" }, title),
                subtitle && (react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-center text-muted-foreground" }, subtitle))),
            children)));
}
exports.default = AuthScreen;
