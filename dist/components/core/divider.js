'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Divider = function (_a) {
    var _b = _a.orientation, orientation = _b === void 0 ? 'horizontal' : _b, _c = _a.variant, variant = _c === void 0 ? 'fullWidth' : _c, className = _a.className, children = _a.children;
    var isVertical = orientation === 'vertical';
    var hasChildren = !!children;
    var dividerClasses = (0, frontend_shadcn_1.cn)('bg-border', isVertical ? 'h-auto w-px' : 'h-px w-full', variant === 'inset' && 'mx-4', variant === 'middle' && 'mx-2', hasChildren && 'flex items-center', isVertical && hasChildren && 'flex-col', className);
    var childWrapperClasses = (0, frontend_shadcn_1.cn)('px-2', isVertical ? 'py-4' : '');
    if (hasChildren) {
        return (react_1.default.createElement("div", { className: dividerClasses, role: "separator" },
            react_1.default.createElement("div", { className: "flex-grow ".concat(isVertical ? 'h-full' : 'w-full') }),
            react_1.default.createElement("div", { className: childWrapperClasses }, children),
            react_1.default.createElement("div", { className: "flex-grow ".concat(isVertical ? 'h-full' : 'w-full') })));
    }
    return react_1.default.createElement("div", { className: dividerClasses, role: "separator" });
};
exports.Divider = Divider;
