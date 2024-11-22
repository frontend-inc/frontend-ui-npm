'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var NoSearchResults = function () {
    return (react_1.default.createElement("div", { className: "flex flex-row w-full justify-center" },
        react_1.default.createElement(components_1.Empty, { icon: "ri-search-line", title: "No search results", description: "Please try another query." })));
};
exports.default = NoSearchResults;
