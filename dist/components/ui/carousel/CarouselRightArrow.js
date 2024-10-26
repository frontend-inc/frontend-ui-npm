'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var CarouselRightArrow = function (props) {
    return (react_1.default.createElement(components_1.Button, { variant: "outline", size: "icon", className: "absolute right-5 top-[28%] h-8 w-8 sm:h-12 sm:w-12 shadow-md opacity-80 hover:opacity-100 bg-background hover:bg-background" },
        react_1.default.createElement(components_2.Icon, { name: "ChevronRight", className: "h-4 w-4 sm:h-6 sm:w-6 text-foreground" }),
        react_1.default.createElement("span", { className: "sr-only" }, "Next slide")));
};
exports.default = CarouselRightArrow;
