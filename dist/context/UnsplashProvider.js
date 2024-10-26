'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var UnsplashContext_1 = __importDefault(require("./UnsplashContext"));
var UnsplashProvider = function (props) {
    var _a = props || {}, children = _a.children, apiKey = _a.apiKey;
    var value = {
        unsplashApiKey: apiKey,
    };
    return (react_1.default.createElement(UnsplashContext_1.default.Provider, { value: value }, children));
};
exports.default = UnsplashProvider;
