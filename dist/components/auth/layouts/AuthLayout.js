'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AuthLayout = function (props) {
    var children = props.children;
    return (react_1.default.createElement("div", { className: "flex h-full w-full p-4 min-h-screen items-center justify-center" },
        react_1.default.createElement(components_1.Container, { maxWidth: "sm" }, children)));
};
exports.default = AuthLayout;
