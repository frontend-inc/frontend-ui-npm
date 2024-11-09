"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var AnimatedShinyText = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.shimmerWidth, shimmerWidth = _b === void 0 ? 100 : _b;
    return (react_1.default.createElement("p", { style: {
            '--shiny-width': "".concat(shimmerWidth, "px"),
        }, className: (0, frontend_shadcn_1.cn)('mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70', 
        // Shine effect
        'animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]', 
        // Shine gradient
        'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80', className) }, children));
};
exports.default = AnimatedShinyText;
