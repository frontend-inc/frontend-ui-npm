'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var AttachmentImage = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 64 : _b, _c = _a.width, width = _c === void 0 ? 64 : _c, _d = _a.icon, icon = _d === void 0 ? 'File' : _d, className = _a.className;
    return (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: (0, frontend_shadcn_2.cn)('rounded-md', className), style: {
            height: "".concat(height, "px"),
            width: "".concat(width, "px"),
        } },
        react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "bg-primary" },
            react_1.default.createElement(components_1.Icon, { name: icon, className: "bg-primary-foreground" }))));
};
exports.default = AttachmentImage;
