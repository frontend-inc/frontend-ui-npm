'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var lucide_react_1 = require("lucide-react");
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
function CommentButton(_a) {
    var resource = _a.resource, _b = _a.size, size = _b === void 0 ? 'small' : _b;
    var _c = (0, frontend_js_1.useResourceContext)(), openShow = _c.openShow, setOpenShow = _c.setOpenShow, setResource = _c.setResource;
    var handleClick = function () {
        setResource(resource);
        setOpenShow(!openShow);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.IconButton, { onClick: handleClick, className: (0, frontend_shadcn_1.cn)(size === 'large' && 'border border-divider') },
            react_1.default.createElement(lucide_react_1.MessageSquare, { className: "text-foreground w-5 h-5" }))));
}
exports.default = CommentButton;
