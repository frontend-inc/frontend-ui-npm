"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ShimmerButton = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.shimmerColor, shimmerColor = _b === void 0 ? "#ffffff" : _b, _c = _a.shimmerSize, shimmerSize = _c === void 0 ? "0.05em" : _c, _d = _a.shimmerDuration, shimmerDuration = _d === void 0 ? "3s" : _d, _e = _a.borderRadius, borderRadius = _e === void 0 ? "100px" : _e, _f = _a.background, background = _f === void 0 ? "rgba(0, 0, 0, 1)" : _f, className = _a.className, children = _a.children, props = __rest(_a, ["shimmerColor", "shimmerSize", "shimmerDuration", "borderRadius", "background", "className", "children"]);
    return (react_1.default.createElement("button", __assign({ style: {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
        }, className: (0, frontend_shadcn_1.cn)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black", "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px", className), ref: ref }, props),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("-z-30 blur-[2px]", "absolute inset-0 overflow-visible [container-type:size]") },
            react_1.default.createElement("div", { className: "absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]" },
                react_1.default.createElement("div", { className: "animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" }))),
        children,
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("insert-0 absolute size-full", "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]", 
            // transition
            "transform-gpu transition-all duration-300 ease-in-out", 
            // on hover
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]", 
            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]") }),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]") })));
});
ShimmerButton.displayName = "ShimmerButton";
exports.default = ShimmerButton;
