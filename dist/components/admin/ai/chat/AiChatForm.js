'use client';
"use strict";
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
var react_1 = __importStar(require("react"));
var components_1 = require("../../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var AiChatForm = function (_a) {
    var open = _a.open, prompt = _a.prompt, handleClick = _a.handleClick, messages = _a.messages, setMessages = _a.setMessages, input = _a.input, handleInputChange = _a.handleInputChange;
    (0, react_1.useEffect)(function () {
        if (open) {
            setMessages([
                {
                    id: 'openai-chat',
                    role: 'system',
                    content: prompt,
                },
            ]);
        }
    }, [open, prompt, setMessages]);
    return (react_1.default.createElement("div", { className: "flex p-2 flex-col space-y-4" },
        react_1.default.createElement(components_1.TextArea, { label: "Write a sentence about ...", name: "prompt", placeholder: "Enter text...", value: input, handleChange: handleInputChange }),
        react_1.default.createElement(frontend_shadcn_1.ScrollArea, { className: "max-h-[calc(100vh-120px)] w-full" },
            react_1.default.createElement("ul", { className: "flex flex-col text-foreground space-y-2" }, messages
                .filter(function (message) { return message.role === 'assistant'; })
                .map(function (message, i) { return (react_1.default.createElement("li", { key: i, className: "cursor-pointer border border-border hover:border-primary rounded-lg p-2 text-sm w-full justify-start mb-2 text-left whitespace-pre-line", onClick: function () { return handleClick(message.content); } }, message.content)); })))));
};
exports.default = AiChatForm;
