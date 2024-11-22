'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Quote = function (props) {
    var _a = props || {}, text = _a.text, author = _a.author, className = _a.className;
    return (react_1.default.createElement("figure", { className: (0, frontend_shadcn_1.cn)('flex space-x-4', className) },
        react_1.default.createElement("div", { className: "flex flex-col space-y-4 pl-6 border-l-4 border-border" },
            react_1.default.createElement("blockquote", null,
                react_1.default.createElement("p", { className: "text-lg italic font-medium text-muted-foreground leading-loose" }, text)),
            author && (react_1.default.createElement("figcaption", { className: "flex justify-center mt-6 space-x-3" },
                react_1.default.createElement("div", { className: "flex divide-x-2 divide-border" },
                    react_1.default.createElement("cite", { className: "pr-3 font-medium text-muted-foreground" },
                        "\u2014 ",
                        author)))))));
};
exports.default = Quote;
