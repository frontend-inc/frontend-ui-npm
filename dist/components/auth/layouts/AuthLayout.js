'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AuthLayout = function (props) {
    var children = props.children;
    return react_1.default.createElement("div", { className: "w-full container mx-auto" }, children);
};
exports.default = AuthLayout;
