'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BrandfetchContext_1 = __importDefault(require("./BrandfetchContext"));
var BrandfetchProvider = function (props) {
    var _a = props || {}, children = _a.children, apiKey = _a.apiKey;
    var value = {
        apiKey: apiKey,
    };
    return (react_1.default.createElement(BrandfetchContext_1.default.Provider, { value: value }, children));
};
exports.default = BrandfetchProvider;