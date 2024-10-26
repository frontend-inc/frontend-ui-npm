'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var AIChatMessages = function (props) {
    var _a;
    var avatar = props.avatar, messages = props.messages;
    return (react_1.default.createElement(frontend_shadcn_2.ScrollArea, { className: "h-[calc(100vh-200px)]" },
        react_1.default.createElement("ul", { className: "list-none p-0" }, (_a = messages === null || messages === void 0 ? void 0 : messages.filter(function (message) { return message.role != 'system'; })) === null || _a === void 0 ? void 0 : _a.map(function (message, i) { return (react_1.default.createElement("li", { key: i, className: "mb-1 flex items-start" },
            react_1.default.createElement("div", { className: "mr-2 w-4" }, avatar && message.role == 'assistant' && (react_1.default.createElement(frontend_shadcn_1.Avatar, null,
                react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: avatar, alt: "AI Assistant" })))),
            react_1.default.createElement("button", { className: "flex-grow p-1 rounded text-left hover:bg-accent" },
                react_1.default.createElement("p", { className: "text-foreground whitespace-pre-line" }, message.content)))); }))));
};
exports.default = AIChatMessages;
