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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotPattern = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@nextui-org/react");
function DotPattern(_a) {
    var _b = _a.width, width = _b === void 0 ? 16 : _b, _c = _a.height, height = _c === void 0 ? 16 : _c, _d = _a.x, x = _d === void 0 ? 0 : _d, _e = _a.y, y = _e === void 0 ? 0 : _e, _f = _a.cx, cx = _f === void 0 ? 1 : _f, _g = _a.cy, cy = _g === void 0 ? 1 : _g, _h = _a.cr, cr = _h === void 0 ? 1 : _h, className = _a.className, props = __rest(_a, ["width", "height", "x", "y", "cx", "cy", "cr", "className"]);
    var id = (0, react_1.useId)();
    return (react_1.default.createElement("svg", __assign({ "aria-hidden": "true", className: (0, react_2.cn)('pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80', className) }, props),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("pattern", { id: id, width: width, height: height, patternUnits: "userSpaceOnUse", patternContentUnits: "userSpaceOnUse", x: x, y: y },
                react_1.default.createElement("circle", { id: "pattern-circle", cx: cx, cy: cy, r: cr }))),
        react_1.default.createElement("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#".concat(id, ")") })));
}
exports.DotPattern = DotPattern;
exports.default = DotPattern;
