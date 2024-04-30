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
var material_1 = require("@mui/material");
var Pagination = function (props) {
    var loading = props.loading, _a = props.totalCount, totalCount = _a === void 0 ? 0 : _a, _b = props.page, page = _b === void 0 ? 1 : _b, _c = props.numPages, numPages = _c === void 0 ? 1 : _c, _d = props.perPage, perPage = _d === void 0 ? 10 : _d, numResults = props.numResults, handlePaginate = props.handlePaginate;
    var _e = (0, react_1.useState)(0), startIndex = _e[0], setStartIndex = _e[1];
    var _f = (0, react_1.useState)(0), endIndex = _f[0], setEndIndex = _f[1];
    var _g = (0, react_1.useState)(page), pageNumber = _g[0], setPageNumber = _g[1];
    var handleChangePage = function (event, nextPage) {
        setPageNumber(nextPage);
        handlePaginate(event, nextPage);
    };
    (0, react_1.useEffect)(function () {
        if (page && numPages && numResults && perPage) {
            console.log('perPage', perPage);
            var start = (page - 1) * perPage + 1;
            setStartIndex(start);
            setEndIndex(start + numResults - 1);
        }
    }, [page, numPages, numResults]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.pagination },
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(material_1.Box, { mx: 2 }, loading ? (react_1.default.createElement(material_1.CircularProgress, { size: 24 })) : (react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" },
                "Results ",
                startIndex,
                " - ",
                endIndex,
                " of ",
                totalCount)))),
        react_1.default.createElement(material_1.Pagination, { count: numPages, page: pageNumber, defaultPage: 1, onChange: handleChangePage, color: "primary", shape: "rounded" })));
};
exports.default = Pagination;
var sx = {
    pagination: {
        pt: 1,
        pb: 1,
        mb: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        width: '100%',
    },
    button: {
        color: 'text.secondary',
    },
};
