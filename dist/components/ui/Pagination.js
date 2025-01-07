'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@nextui-org/react");
var Pagination = function (props) {
    var loading = props.loading, _a = props.totalCount, totalCount = _a === void 0 ? 0 : _a, _b = props.page, page = _b === void 0 ? 1 : _b, _c = props.numPages, numPages = _c === void 0 ? 1 : _c, _d = props.perPage, perPage = _d === void 0 ? 10 : _d, handlePaginate = props.handlePaginate;
    var _e = (0, react_1.useState)(0), startIndex = _e[0], setStartIndex = _e[1];
    var _f = (0, react_1.useState)(0), endIndex = _f[0], setEndIndex = _f[1];
    var handleChangePage = function (nextPage) {
        handlePaginate(nextPage);
    };
    (0, react_1.useEffect)(function () {
        if (page && numPages && totalCount && perPage) {
            var start = (page - 1) * perPage + 1;
            setStartIndex(start);
            setEndIndex(Math.min(start + perPage - 1, totalCount));
        }
    }, [page, numPages, totalCount, perPage]);
    return (react_1.default.createElement("div", { className: "p-2 flex flex-row justify-between items-center border-t border-divider w-full" },
        react_1.default.createElement("div", { className: "hidden sm:block mx-2" }, loading ? (react_1.default.createElement(react_2.Spinner, null)) : (react_1.default.createElement("p", { className: "text-sm text-foreground/70" },
            "Results ",
            startIndex,
            " - ",
            endIndex,
            " of ",
            totalCount))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_2.Pagination, { total: numPages, initialPage: page, onChange: function (page) { return handleChangePage(page); } }))));
};
exports.default = Pagination;
