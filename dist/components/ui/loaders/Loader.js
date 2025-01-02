'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
function Loader(_a) {
    var loading = _a.loading;
    if (!loading)
        return null;
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-col items-center justify-center', 'w-full h-full min-h-[200px]') },
        react_1.default.createElement(react_2.Spinner, null)));
}
exports.default = Loader;
