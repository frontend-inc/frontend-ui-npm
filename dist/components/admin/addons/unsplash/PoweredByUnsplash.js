'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../../core");
var UnsplashLogo_1 = __importDefault(require("./UnsplashLogo"));
var PoweredByUnsplash = function () {
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-2 w-full justify-center items-center" },
        react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, "Powered by"),
        react_1.default.createElement(UnsplashLogo_1.default, { className: 'fill-white' })));
};
exports.default = PoweredByUnsplash;
