"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
function ShineBorder(_a) {
    var _b = _a.borderRadius, borderRadius = _b === void 0 ? 8 : _b, _c = _a.borderWidth, borderWidth = _c === void 0 ? 1 : _c, _d = _a.duration, duration = _d === void 0 ? 14 : _d, _e = _a.color, color = _e === void 0 ? "#000000" : _e, className = _a.className, children = _a.children;
    return (react_1.default.createElement("div", { style: {
            "--border-radius": "".concat(borderRadius, "px"),
        }, className: (0, frontend_shadcn_1.cn)("relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-white p-3 text-black dark:bg-black dark:text-white", className) },
        react_1.default.createElement("div", { style: {
                "--border-width": "".concat(borderWidth, "px"),
                "--border-radius": "".concat(borderRadius, "px"),
                "--duration": "".concat(duration, "s"),
                "--mask-linear-gradient": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                "--background-radial-gradient": "radial-gradient(transparent,transparent, ".concat(color instanceof Array ? color.join(",") : color, ",transparent,transparent)"),
            }, className: "pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[\"\"] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine" }),
        children));
}
exports.default = ShineBorder;
