"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var AvatarIcon = function (props) {
    var _a = props || {}, icon = _a.icon, className = _a.className;
    return (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: 'rounded-lg' },
        react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: (0, frontend_shadcn_2.cn)('rounded-lg bg-primary', className) },
            react_1.default.createElement(components_1.RemixIcon, { name: icon, className: 'text-primary-foreground' }))));
};
exports.default = AvatarIcon;
