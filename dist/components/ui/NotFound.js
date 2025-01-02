'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NotFound = function () {
    return (react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-center w-full h-full text-center p-4 space-y-4 sm:space-y-0 sm:space-x-4" },
        react_1.default.createElement("h1", { className: "text-4xl font-bold text-primary" }, "404"),
        react_1.default.createElement("div", { className: "hidden sm:block w-0.5 h-20 bg-divider" }),
        react_1.default.createElement("p", { className: "text-lg text-foreground/70" }, "Page not found")));
};
exports.default = NotFound;
