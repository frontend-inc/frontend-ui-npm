'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
var script_1 = __importDefault(require("next/script"));
var GoogleAnalytics = function (props) {
    var id = (props || {}).id;
    if (!id)
        return null;
    return (react_1.default.createElement(head_1.default, null,
        react_1.default.createElement(script_1.default, { id: "google-analytics", strategy: "lazyOnload" }, "window.dataLayer = window.dataLayer || []\n        function gtag() {\n          dataLayer.push(arguments)\n        }\n        gtag('js', new Date())\n        gtag('config', '".concat(id, "')\n      "))));
};
exports.default = GoogleAnalytics;
