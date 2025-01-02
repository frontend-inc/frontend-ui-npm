'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var LoadMore = function (props) {
    var page = props.page, numPages = props.numPages, handlePaginate = props.handlePaginate;
    if (page >= numPages)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-row w-full justify-center items-center" },
        react_1.default.createElement(react_2.Button, { color: "secondary", onPress: handlePaginate, endContent: react_1.default.createElement(components_1.RemixIcon, { name: "ri-arrow-down-line" }) }, "Load More")));
};
exports.default = LoadMore;
