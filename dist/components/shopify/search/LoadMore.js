'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../components");
function LoadMore(_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.hasNextPage, hasNextPage = _c === void 0 ? false : _c, handleSearch = _a.handleSearch;
    if (!hasNextPage)
        return null;
    return (react_1.default.createElement("div", { className: "flex justify-center w-full" },
        react_1.default.createElement(components_1.Button, { loading: loading, color: "secondary", onClick: handleSearch, disabled: loading, endIcon: react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-4 w-4" }) }, "Load More")));
}
exports.default = LoadMore;
