'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var ShopifySearchTags = function (props) {
    var _a = props.tags, tags = _a === void 0 ? [] : _a, handleClick = props.handleClick, handleClearAll = props.handleClearAll;
    if (!tags)
        return null;
    return (react_1.default.createElement("div", { className: "mb-6 flex flex-row justify-start items-center gap-2 overflow-x-auto scrollbar-hide" },
        tags.map(function (tag, index) { return (react_1.default.createElement(react_2.Chip, { key: index, onClose: function () { return handleClick(tag); } }, tag)); }),
        react_1.default.createElement(react_2.Button, { variant: "ghost", onPress: handleClearAll }, "Clear All")));
};
exports.default = ShopifySearchTags;
