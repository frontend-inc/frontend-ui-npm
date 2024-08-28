"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var components_1 = require("../../../../components");
var TableFilterButton = function (props) {
    var _a;
    var loading = props.loading, _b = props.query, query = _b === void 0 ? {} : _b, handleClick = props.handleClick, badgeCount = props.badgeCount, handleClearFilters = props.handleClearFilters;
    var keywords = query.keywords, _c = query.filters, filters = _c === void 0 ? {} : _c;
    var hasFilters = keywords || ((_a = Object.keys(filters)) === null || _a === void 0 ? void 0 : _a.length) > 0;
    return (react_1.default.createElement(material_1.Badge, { badgeContent: badgeCount, color: "primary", anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
        } },
        react_1.default.createElement(material_1.ButtonGroup, null,
            react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", startIcon: loading ? (react_1.default.createElement(components_1.IconLoading, { color: "secondary.contrastText", loading: true })) : (react_1.default.createElement(components_1.Icon, { name: "ListFilter", color: "secondary.contrastText" })), onClick: handleClick }, "Filters"),
            hasFilters && (react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", sx: sx.secondaryAction, onClick: handleClearFilters },
                react_1.default.createElement(icons_material_1.Clear, null))))));
};
exports.default = TableFilterButton;
var sx = {
    secondaryAction: {
        width: 34,
    },
};
