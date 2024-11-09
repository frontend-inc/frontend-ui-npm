"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderBeam = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var BorderBeam = function (_a) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? 200 : _b, _c = _a.duration, duration = _c === void 0 ? 15 : _c, _d = _a.anchor, anchor = _d === void 0 ? 90 : _d, _e = _a.borderWidth, borderWidth = _e === void 0 ? 1.5 : _e, _f = _a.colorFrom, colorFrom = _f === void 0 ? '#ffaa40' : _f, _g = _a.colorTo, colorTo = _g === void 0 ? '#9c40ff' : _g, _h = _a.delay, delay = _h === void 0 ? 0 : _h;
    return (react_1.default.createElement("div", { style: {
            '--size': size,
            '--duration': duration,
            '--anchor': anchor,
            '--border-width': borderWidth,
            '--color-from': colorFrom,
            '--color-to': colorTo,
            '--delay': "-".concat(delay, "s"),
        }, className: (0, frontend_shadcn_1.cn)('pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]', 
        // mask styles
        '![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]', 
        // pseudo styles
        'after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]', className) }));
};
exports.BorderBeam = BorderBeam;
