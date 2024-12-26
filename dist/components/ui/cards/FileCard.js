'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var FileCard = function (props) {
    var _a = props || {}, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, _b = _a.icon, icon = _b === void 0 ? 'ri-file-2-fill' : _b;
    return (react_1.default.createElement("div", { className: 'p-0 flex flex-row hover:bg-muted items-center border border-border rounded-lg' },
        react_1.default.createElement("button", { onClick: handleClick, className: "p-2 w-full flex flex-row items-center cursor-pointer transition-all duration-200" },
            react_1.default.createElement("div", { className: "w-[64px] pr-2 flex flex-row justify-center" }, icon && (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: 'rounded-lg' },
                react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: 'rounded-lg bg-primary' },
                    react_1.default.createElement(components_1.RemixIcon, { name: icon, className: 'text-primary-foreground' }))))),
            react_1.default.createElement("div", { className: "flex flex-col space-y-1 flex-grow-1 w-full" },
                react_1.default.createElement(components_2.Typography, { variant: "subtitle1" }, title),
                react_1.default.createElement(components_2.Typography, { variant: "body2", className: "text-muted-foreground" }, subtitle))),
        react_1.default.createElement("div", { className: "flex flex-row flex-shrink-1 justify-end items-center w-full" },
            actions,
            secondaryAction)));
};
exports.default = FileCard;
