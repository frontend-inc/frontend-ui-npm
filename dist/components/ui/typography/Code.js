'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Code = function (props) {
    var text = (props || {}).text;
    return (react_1.default.createElement("pre", { className: "p-4 rounded-lg bg-muted/50 overflow-x-auto" },
        react_1.default.createElement("code", { className: "text-sm font-mono text-foreground whitespace-pre-wrap break-words" }, text)));
};
exports.default = Code;
