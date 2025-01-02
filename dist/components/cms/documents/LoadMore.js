'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
function LoadMore(props) {
    var page = props.page, numPages = props.numPages, handlePaginate = props.handlePaginate;
    return (react_1.default.createElement("div", { className: "w-full flex justify-center items-center p-2" }, page < numPages && (react_1.default.createElement(react_2.Button, { variant: "ghost", onPress: handlePaginate, className: "flex items-center", endContent: react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-5 w-5" }) }, "Load More"))));
}
exports.default = LoadMore;
