"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Row = function (props) {
    var _a = props.size, size = _a === void 0 ? '1/3' : _a, className = props.className, children = props.children;
    var sizeClasses = {
        '1/2': 'md:w-1/2',
        '1/3': 'md:w-1/3',
        '1/4': 'md:w-1/4',
        '2/3': 'md:w-2/3',
        '3/4': 'md:w-3/4',
        full: 'md:w-full',
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col items-center w-full', sizeClasses[size], className) }, children));
};
exports.default = Row;
