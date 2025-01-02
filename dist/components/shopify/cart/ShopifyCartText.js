'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
function ShopifyCartText(_a) {
    var label = _a.label, value = _a.value;
    return (react_1.default.createElement("div", { className: "flex flex-row justify-between w-full" },
        react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-foreground/70" }, label),
        react_1.default.createElement(components_1.Typography, { variant: "body1" }, value)));
}
exports.default = ShopifyCartText;
