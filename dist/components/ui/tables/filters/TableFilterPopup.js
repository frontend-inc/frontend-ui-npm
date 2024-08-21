"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var TableFilterForm_1 = __importDefault(require("./TableFilterForm"));
var TableFilterPopup = function (props) {
    var open = props.open, loading = props.loading, anchorEl = props.anchorEl, query = props.query, handleClose = props.handleClose, fields = props.fields, handleSearch = props.handleSearch, handleChange = props.handleChange, handleClearFilters = props.handleClearFilters;
    return (react_1.default.createElement(__1.Popup, { anchorEl: anchorEl, open: open, handleClose: handleClose },
        react_1.default.createElement(TableFilterForm_1.default, { loading: loading, query: query, fields: fields, handleSearch: handleSearch, handleChange: handleChange, handleClearFilters: handleClearFilters })));
};
exports.default = TableFilterPopup;
