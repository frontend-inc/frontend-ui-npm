"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("components");
var FilterForm_1 = __importDefault(require("./FilterForm"));
var FilterDrawer = function (props) {
    var open = props.open, query = props.query, handleClose = props.handleClose, fields = props.fields, handleSearch = props.handleSearch, handleChange = props.handleChange, handleClearFilters = props.handleClearFilters;
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, title: "search" },
        react_1.default.createElement(FilterForm_1.default, { query: query, fields: fields, handleSearch: handleSearch, handleChange: handleChange, handleClearFilters: handleClearFilters })));
};
exports.default = FilterDrawer;
