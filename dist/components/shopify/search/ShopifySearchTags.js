'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var ShopifySearchTags = function (props) {
    var _a = props.tags, tags = _a === void 0 ? [] : _a, handleClick = props.handleClick, handleClearAll = props.handleClearAll;
    if (!tags)
        return null;
    return (react_1.default.createElement("div", { className: "mb-6 flex flex-row justify-start items-center gap-2 overflow-x-auto scrollbar-hide" },
        tags.map(function (tag, index) { return (react_1.default.createElement("div", { key: index, className: "flex items-center px-2 py-1 rounded-full border border-gray-300 bg-white" },
            react_1.default.createElement("span", { className: "text-xs uppercase" }, tag),
            react_1.default.createElement(components_1.Button, { variant: "ghost", size: "icon", className: "ml-1 p-0 hover:bg-transparent", onClick: function () { return handleClick(tag); } },
                react_1.default.createElement(lucide_react_1.X, { className: "h-4 w-4 text-primary" })))); }),
        react_1.default.createElement(components_1.Button, { variant: "ghost", className: "text-primary", onClick: handleClearAll }, "Clear All")));
};
exports.default = ShopifySearchTags;
