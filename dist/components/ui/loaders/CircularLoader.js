'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var Loader = function (props) {
    var _a = (props || {}).size, size = _a === void 0 ? 'sm' : _a;
    return (react_1.default.createElement("div", { className: "w-full h-full flex justify-center items-center" },
        react_1.default.createElement(react_2.Spinner, null)));
};
exports.default = Loader;
