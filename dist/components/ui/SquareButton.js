"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var SquareButton = function (props) {
    var _a = props || {}, label = _a.label, color = _a.color, icon = _a.icon, selected = _a.selected, handleClick = _a.handleClick;
    return (react_1.default.createElement("button", { className: (0, frontend_shadcn_2.cn)('w-full flex flex-row space-x-3 items-center rounded-lg hover:border-primary p-4 transition duration-200', selected
            ? 'border-2 border-primary scale-105 shadow-lg'
            : 'border-2 border-border'), onClick: handleClick ? handleClick : undefined },
        react_1.default.createElement(frontend_shadcn_1.Avatar, { style: {
                width: 48,
                height: 48,
            } },
            react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: color },
                react_1.default.createElement(components_1.Icon, { name: icon, className: "text-white" }))),
        react_1.default.createElement("div", { className: "text-sm text-left font-medium text-foreground" }, label)));
};
exports.default = SquareButton;
