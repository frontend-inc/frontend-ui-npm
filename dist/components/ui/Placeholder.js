'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../core");
var components_1 = require("../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var Placeholder = function (props) {
    var icon = props.icon, title = props.title, description = props.description, buttons = props.buttons, _a = props.color, color = _a === void 0 ? 'text.secondary' : _a;
    return (react_1.default.createElement("div", { className: "w-full p-4 flex flex-col space-y-2 justify-center items-center" },
        icon && react_1.default.createElement(components_1.Icon, { name: icon, className: (0, frontend_shadcn_1.cn)(color, 'w-5 h-5') }),
        react_1.default.createElement(core_1.Typography, { variant: "subtitle2" }, title),
        react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, description),
        buttons && (react_1.default.createElement("div", { className: "flex flex-row space-x-2 justify-center items-center" }, buttons))));
};
exports.default = Placeholder;
