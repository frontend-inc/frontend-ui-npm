'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var Tooltip = function (_a) {
    var children = _a.children, title = _a.title, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, _c = _a.arrow, arrow = _c === void 0 ? true : _c, className = _a.className, contentClassName = _a.contentClassName;
    return (react_1.default.createElement(frontend_shadcn_1.TooltipProvider, null,
        react_1.default.createElement(frontend_shadcn_1.Tooltip, { delayDuration: 300 },
            react_1.default.createElement(frontend_shadcn_1.TooltipTrigger, { asChild: true },
                react_1.default.createElement("span", { className: (0, react_2.cn)('inline-block', className) }, children)),
            react_1.default.createElement(frontend_shadcn_1.TooltipContent, { side: placement, sideOffset: 5, className: (0, react_2.cn)('z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95', arrow &&
                    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', contentClassName) },
                title,
                arrow && (react_1.default.createElement("span", { className: (0, react_2.cn)('absolute w-2 h-2 bg-primary rotate-45 transform', placement === 'top' &&
                        'bottom-[-4px] left-1/2 -translate-x-1/2', placement === 'bottom' &&
                        'top-[-4px] left-1/2 -translate-x-1/2', placement === 'left' && 'right-[-4px] top-1/2 -translate-y-1/2', placement === 'right' && 'left-[-4px] top-1/2 -translate-y-1/2') }))))));
};
exports.Tooltip = Tooltip;
