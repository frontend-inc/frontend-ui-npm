'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
function AuthScreen(_a) {
    var title = _a.title, subtitle = _a.subtitle, children = _a.children;
    return (react_1.default.createElement(react_2.Card, { className: "w-full bg-content1" },
        react_1.default.createElement(react_2.CardBody, { className: "flex flex-col space-y-4 p-4 sm:p-6" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
                react_1.default.createElement(components_1.Typography, { variant: "h4", className: "text-center font-bold" }, title),
                subtitle && (react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-center text-foreground/70" }, subtitle))),
            children)));
}
exports.default = AuthScreen;
