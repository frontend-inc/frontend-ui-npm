"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
function AnimatedCircularProgressBar(_a) {
    var _b = _a.max, max = _b === void 0 ? 100 : _b, _c = _a.min, min = _c === void 0 ? 0 : _c, _d = _a.value, value = _d === void 0 ? 0 : _d, gaugePrimaryColor = _a.gaugePrimaryColor, gaugeSecondaryColor = _a.gaugeSecondaryColor, className = _a.className;
    var circumference = 2 * Math.PI * 45;
    var percentPx = circumference / 100;
    var currentPercent = ((value - min) / (max - min)) * 100;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("relative size-40 text-2xl font-semibold", className), style: {
            "--circle-size": "100px",
            "--circumference": circumference,
            "--percent-to-px": "".concat(percentPx, "px"),
            "--gap-percent": "5",
            "--offset-factor": "0",
            "--transition-length": "1s",
            "--transition-step": "200ms",
            "--delay": "0s",
            "--percent-to-deg": "3.6deg",
            transform: "translateZ(0)",
        } },
        react_1.default.createElement("svg", { fill: "none", className: "size-full", strokeWidth: "2", viewBox: "0 0 100 100" },
            currentPercent <= 90 && currentPercent >= 0 && (react_1.default.createElement("circle", { cx: "50", cy: "50", r: "45", strokeWidth: "10", strokeDashoffset: "0", strokeLinecap: "round", strokeLinejoin: "round", className: " opacity-100", style: {
                    stroke: gaugeSecondaryColor,
                    "--stroke-percent": 90 - currentPercent,
                    "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transform: "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",
                    transition: "all var(--transition-length) ease var(--delay)",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)",
                } })),
            react_1.default.createElement("circle", { cx: "50", cy: "50", r: "45", strokeWidth: "10", strokeDashoffset: "0", strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-100", style: {
                    stroke: gaugePrimaryColor,
                    "--stroke-percent": currentPercent,
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transition: "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
                    transitionProperty: "stroke-dasharray,transform",
                    transform: "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)",
                } })),
        react_1.default.createElement("span", { "data-current-value": currentPercent, className: "duration-[var(--transition-length)] delay-[var(--delay)] absolute inset-0 m-auto size-fit ease-linear animate-in fade-in" }, currentPercent)));
}
exports.default = AnimatedCircularProgressBar;
