'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var InstagramPosts = function (props) {
    var items = (props || {}).items;
    return (react_1.default.createElement("div", { className: "w-full justify-center flex flow-row p-2" },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-2xl" },
            react_1.default.createElement("div", { className: 'w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6' }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: item === null || item === void 0 ? void 0 : item.embed } })); })),
            (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Empty, { icon: "Instagram", title: "No instagram posts.", description: "Instagram posts will appear here." })))));
};
exports.default = InstagramPosts;
