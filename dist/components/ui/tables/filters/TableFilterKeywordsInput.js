'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var FilterKeywordsInput = function (_a) {
    var label = _a.label, value = _a.value, handleChange = _a.handleChange, handleSearch = _a.handleSearch;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement(__1.SearchInput, { name: label, value: value, placeholder: "Keywords", handleChange: handleChange, handleSearch: handleSearch })));
};
exports.default = FilterKeywordsInput;
