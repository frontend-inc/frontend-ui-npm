'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
var OkendoScript = function (props) {
    var subscriberId = (props || {}).subscriberId;
    if (!subscriberId)
        return null;
    return (react_1.default.createElement(head_1.default, null,
        react_1.default.createElement("meta", { name: "oke:subscriber_id", content: subscriberId }),
        react_1.default.createElement("script", { src: "https://cdn-static.okendo.io/reviews-widget-plus/js/okendo-reviews.js" })));
};
exports.default = OkendoScript;
