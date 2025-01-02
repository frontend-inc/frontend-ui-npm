"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../components");
var react_2 = require("@nextui-org/react");
var SquareButton = function (props) {
    var _a = props || {}, label = _a.label, color = _a.color, icon = _a.icon, selected = _a.selected, handleClick = _a.handleClick;
    return (react_1.default.createElement("button", { className: (0, react_2.cn)('w-full flex flex-row space-x-3 items-center rounded-lg hover:border-primary p-4 transition duration-200', selected
            ? 'border-2 border-primary shadow-lg'
            : 'border-2 border-divider'), onClick: handleClick ? handleClick : undefined },
        react_1.default.createElement(frontend_shadcn_1.Avatar, { style: {
                width: 48,
                height: 48,
            } },
            react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: color },
                react_1.default.createElement(components_1.RemixIcon, { name: icon, className: "text-white" }))),
        react_1.default.createElement("div", { className: "text-sm text-left font-medium text-foreground" }, label)));
};
exports.default = SquareButton;
