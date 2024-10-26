'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var components_1 = require("../../../components");
var LoadMore = function (props) {
    var page = props.page, numPages = props.numPages, handlePaginate = props.handlePaginate, _a = props.enableInfiniteLoad, enableInfiniteLoad = _a === void 0 ? false : _a;
    if (page >= numPages)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-row w-full justify-center items-center" },
        react_1.default.createElement(core_1.Button, { color: "secondary", onClick: handlePaginate, endIcon: react_1.default.createElement(components_1.Icon, { name: "ChevronDown" }) }, "Load More")));
};
exports.default = LoadMore;
