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
function Iphone15Pro(_a) {
    var _b = _a.width, width = _b === void 0 ? 433 : _b, _c = _a.height, height = _c === void 0 ? 882 : _c, src = _a.src, props = __rest(_a, ["width", "height", "src"]);
    return (react_1.default.createElement("svg", __assign({ width: width, height: height, viewBox: "0 0 ".concat(width, " ").concat(height), fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("path", { d: "M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z", className: "fill-[#E5E5E5] dark:fill-[#404040]" }),
        react_1.default.createElement("path", { d: "M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z", className: "fill-[#E5E5E5] dark:fill-[#404040]" }),
        react_1.default.createElement("path", { d: "M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z", className: "fill-[#E5E5E5] dark:fill-[#404040]" }),
        react_1.default.createElement("path", { d: "M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z", className: "fill-[#E5E5E5] dark:fill-[#404040]" }),
        react_1.default.createElement("path", { d: "M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z", className: "fill-[#E5E5E5] dark:fill-[#404040]" }),
        react_1.default.createElement("path", { d: "M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z", className: "dark:fill-[#262626] fill-white" }),
        react_1.default.createElement("path", { opacity: "0.5", d: "M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z", className: "fill-[#E5E5E5] dark:fill-[#404040]" }),
        react_1.default.createElement("path", { d: "M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z", className: "fill-[#E5E5E5] dark:fill-[#404040] stroke-[#E5E5E5] dark:stroke-[#404040] stroke-[0.5]" }),
        src && (react_1.default.createElement("image", { href: src, x: "21.25", y: "19.25", width: "389.5", height: "843.5", preserveAspectRatio: "xMidYMid slice", clipPath: "url(#roundedCorners)" })),
        react_1.default.createElement("path", { d: "M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z", className: "dark:fill-[#262626] fill-[#F5F5F5]" }),
        react_1.default.createElement("path", { d: "M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z", className: "dark:fill-[#262626] fill-[#F5F5F5]" }),
        react_1.default.createElement("path", { d: "M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z", className: "fill-[#E5E5E5] dark:fill-[#404040]" }),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "roundedCorners" },
                react_1.default.createElement("rect", { x: "21.25", y: "19.25", width: "389.5", height: "843.5", rx: "55.75", ry: "55.75" })))));
}
exports.default = Iphone15Pro;