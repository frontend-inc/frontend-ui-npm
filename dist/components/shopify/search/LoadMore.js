'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var react_2 = require("@nextui-org/react");
function LoadMore(props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.hasNextPage, hasNextPage = _b === void 0 ? false : _b, handleSearch = props.handleSearch;
    if (!hasNextPage)
        return null;
    return (react_1.default.createElement("div", { className: "flex justify-center w-full" },
        react_1.default.createElement(react_2.Button, { isLoading: loading, variant: "solid", onPress: handleSearch, disabled: loading, endContent: react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-4 w-4" }) }, "Load More")));
}
exports.default = LoadMore;
