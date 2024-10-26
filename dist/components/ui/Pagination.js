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
var components_1 = require("../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var Pagination = function (props) {
    var loading = props.loading, _a = props.totalCount, totalCount = _a === void 0 ? 0 : _a, _b = props.page, page = _b === void 0 ? 1 : _b, _c = props.numPages, numPages = _c === void 0 ? 1 : _c, _d = props.perPage, perPage = _d === void 0 ? 10 : _d, handlePaginate = props.handlePaginate;
    var _e = (0, react_1.useState)(0), startIndex = _e[0], setStartIndex = _e[1];
    var _f = (0, react_1.useState)(0), endIndex = _f[0], setEndIndex = _f[1];
    var _g = (0, react_1.useState)(page), pageNumber = _g[0], setPageNumber = _g[1];
    var handleChangePage = function (nextPage) {
        setPageNumber(nextPage);
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
        react_1.default.createElement("div", { className: "hidden sm:block mx-2" }, loading ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "h-6 w-6 animate-spin text-primary" })) : (react_1.default.createElement("p", { className: "text-sm text-muted-foreground" },
            "Results ",
            startIndex,
            " - ",
            endIndex,
            " of ",
            totalCount))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(frontend_shadcn_1.Pagination, null,
                react_1.default.createElement(frontend_shadcn_1.PaginationContent, null,
                    react_1.default.createElement(frontend_shadcn_1.PaginationItem, null,
                        react_1.default.createElement(components_1.Button, { variant: "outline", onClick: function () { return handleChangePage(Math.max(1, pageNumber - 1)); }, disabled: pageNumber === 1, className: "text-foreground" }, "Previous")),
                    Array.from({ length: numPages }, function (_, i) { return i + 1; }).map(function (num) { return (react_1.default.createElement(frontend_shadcn_1.PaginationItem, { key: num },
                        react_1.default.createElement(components_1.Button, { variant: num === pageNumber ? 'default' : 'outline', size: "sm", onClick: function () { return handleChangePage(num); } }, num))); }),
                    react_1.default.createElement(frontend_shadcn_1.PaginationItem, null,
                        react_1.default.createElement(components_1.Button, { variant: "outline", onClick: function () {
                                return handleChangePage(Math.min(numPages, pageNumber + 1));
                            }, disabled: pageNumber === numPages, className: "text-foreground" }, "Next")))))));
};
exports.default = Pagination;
