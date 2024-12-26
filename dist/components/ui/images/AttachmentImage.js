'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var AttachmentImage = function (props) {
    var _a = props.icon, icon = _a === void 0 ? 'ri-file-2-fill' : _a;
    return (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "rounded-lg" },
        react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "bg-accent rounded-lg" },
            react_1.default.createElement(components_1.RemixIcon, { name: icon, size: "lg", className: "text-accent-foreground" }))));
};
exports.default = AttachmentImage;
