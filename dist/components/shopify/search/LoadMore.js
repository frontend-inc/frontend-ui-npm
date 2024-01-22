"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var LoadMore = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.hasNextPage, hasNextPage = _b === void 0 ? false : _b, handleSearch = props.handleSearch;
    if (!hasNextPage)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.loadMoreContainer },
        react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleSearch, disabled: loading }, "Load More")));
};
exports.default = LoadMore;
var sx = {
    loadMoreContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        my: 4,
    },
};
