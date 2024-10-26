'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var CarouselLeftArrow = function (props) {
    return (react_1.default.createElement(components_1.Button, { variant: "outline", size: "icon", className: "absolute left-5 top-[28%] h-8 w-8 sm:h-12 sm:w-12 shadow-md opacity-80 hover:opacity-90 bg-background hover:bg-background" },
        react_1.default.createElement(__1.Icon, { name: "ChevronLeft", className: "h-4 w-4 sm:h-6 sm:w-6 text-foreground" }),
        react_1.default.createElement("span", { className: "sr-only" }, "Previous slide")));
};
exports.default = CarouselLeftArrow;
