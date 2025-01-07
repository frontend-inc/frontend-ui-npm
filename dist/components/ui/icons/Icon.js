"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var Icon = function (props) {
    var name = props.name, _a = props.variant, variant = _a === void 0 ? 'default' : _a, _b = props.size, size = _b === void 0 ? 'md' : _b, color = props.color, className = props.className;
    var ghostClasses = {
        default: 'bg-content1',
        primary: 'bg-primary/20',
        secondary: 'bg-secondary/20',
        success: 'bg-success/20',
        warning: 'bg-warning/20',
        error: 'bg-error/20',
        background: 'bg-background',
        content1: 'bg-content1',
        content2: 'bg-content2',
    };
    var solidClasses = {
        default: 'bg-transparent',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-success',
        warning: 'bg-warning',
        error: 'bg-error',
        background: 'bg-background',
        content1: 'bg-content1',
        content2: 'bg-content2',
    };
    var sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
        xl: 'w-12 h-12',
    };
    var textClasses = {
        default: 'text-foreground',
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
        background: 'text-foreground',
        content1: 'text-foreground',
        content2: 'text-foreground',
    };
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('rounded-lg flex items-center justify-center', sizeClasses[size || 'md'], variant == 'ghost' && ghostClasses[color || 'default'], variant == 'solid' && solidClasses[color || 'default']) },
        react_1.default.createElement(components_1.RemixIcon, { name: name, size: size, className: (0, react_2.cn)(variant == 'ghost' && textClasses[color || 'default'], variant == 'default' && textClasses[color || 'default'], className) })));
};
exports.default = Icon;
