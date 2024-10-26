'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var Loader = function (props) {
    return (react_1.default.createElement("div", { className: "w-full h-full flex justify-center items-center" },
        react_1.default.createElement(core_1.CircularProgress, null)));
};
exports.default = Loader;
