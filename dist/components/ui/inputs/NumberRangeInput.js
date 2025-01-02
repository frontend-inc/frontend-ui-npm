'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var react_2 = require("@nextui-org/react");
function NumberRangeInput(_a) {
    var _b = _a.value, value = _b === void 0 ? {
        min: 0,
        max: 0,
    } : _b, name = _a.name, label = _a.label, handleChange = _a.handleChange, _c = _a.currency, currency = _c === void 0 ? 'usd' : _c, info = _a.info, startAdornment = _a.startAdornment;
    var handleMinChange = function (ev) {
        var min = ev.target.value;
        handleChange === null || handleChange === void 0 ? void 0 : handleChange({
            target: {
                name: name,
                value: __assign(__assign({}, value), { min: Number(min) }),
            },
        });
    };
    var handleMaxChange = function (ev) {
        var max = ev.target.value;
        handleChange === null || handleChange === void 0 ? void 0 : handleChange({
            target: {
                name: name,
                value: __assign(__assign({}, value), { max: Number(max) }),
            },
        });
    };
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement("div", { className: "flex flex-row items-center justify-between w-full" },
            react_1.default.createElement("div", { className: "relative flex-1" },
                startAdornment && (react_1.default.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" },
                    react_1.default.createElement("span", { className: "text-sm text-gray-500" }, currency))),
                react_1.default.createElement(frontend_shadcn_1.Input, { type: "number", onChange: handleMinChange, value: value === null || value === void 0 ? void 0 : value.min, className: (0, react_2.cn)('pr-2', startAdornment && 'pl-8') })),
            react_1.default.createElement("div", { className: "mx-2 text-sm text-gray-500" }, "to"),
            react_1.default.createElement("div", { className: "relative flex-1" },
                startAdornment && (react_1.default.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, startAdornment)),
                react_1.default.createElement(frontend_shadcn_1.Input, { type: "number", value: value === null || value === void 0 ? void 0 : value.max, onChange: handleMaxChange, className: (0, react_2.cn)('pr-2', startAdornment && 'pl-8') })))));
}
exports.default = NumberRangeInput;
