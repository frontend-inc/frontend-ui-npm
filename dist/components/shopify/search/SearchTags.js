"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var SearchTags = function (props) {
    var _a = props.tags, tags = _a === void 0 ? [] : _a, handleClick = props.handleClick, handleClearAll = props.handleClearAll;
    if (!tags)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.searchTags }, tags === null || tags === void 0 ? void 0 :
        tags.map(function (tag, index) { return (react_1.default.createElement(material_1.Chip, { key: index, label: react_1.default.createElement(material_1.Box, { sx: sx.chip },
                react_1.default.createElement(material_1.Typography, { variant: "caption" }, tag),
                react_1.default.createElement(material_1.IconButton, { sx: sx.iconButton, onClick: function () { return handleClick(tag); } },
                    react_1.default.createElement(icons_material_1.Close, { sx: sx.icon }))), variant: "outlined", onClick: function () { return handleClick(tag); }, sx: sx.chip })); }),
        react_1.default.createElement(material_1.Button, { onClick: handleClearAll, variant: "text" }, "Clear All")));
};
exports.default = SearchTags;
var sx = {
    searchTags: {
        mb: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    chip: {
        textTransform: "uppercase",
    },
    icon: {
        color: "primary.main",
        height: "20px",
        width: "20px",
    },
    iconButton: {
        p: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
        ml: "6px",
    },
};
