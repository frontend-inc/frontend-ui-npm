'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var AdminLayoutScroll = function (props) {
    var children = (props || {}).children;
    return react_1.default.createElement(frontend_shadcn_1.ScrollArea, null, children);
};
exports.default = AdminLayoutScroll;
