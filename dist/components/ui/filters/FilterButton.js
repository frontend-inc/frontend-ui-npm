"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var lucide_react_1 = require("lucide-react");
var ButtonLoader_1 = __importDefault(require("../ButtonLoader"));
var FilterButton = function (props) {
    var _a;
    var loading = props.loading, _b = props.query, query = _b === void 0 ? {} : _b, handleClick = props.handleClick, badgeCount = props.badgeCount, handleClearFilters = props.handleClearFilters;
    var keywords = query.keywords, _c = query.filters, filters = _c === void 0 ? {} : _c;
    var hasFilters = keywords || ((_a = Object.keys(filters)) === null || _a === void 0 ? void 0 : _a.length) > 0;
    return (react_1.default.createElement(material_1.Badge, { badgeContent: badgeCount, color: "primary", anchorOrigin: {
            vertical: "top",
            horizontal: "right",
        } },
        react_1.default.createElement(material_1.ButtonGroup, null,
            react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", startIcon: loading ? react_1.default.createElement(ButtonLoader_1.default, { loading: loading }) : react_1.default.createElement(lucide_react_1.ListFilter, null), onClick: handleClick }, "Filters"),
            hasFilters && (react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", sx: sx.secondaryButton, onClick: handleClearFilters },
                react_1.default.createElement(icons_material_1.Clear, null))))));
};
exports.default = FilterButton;
var sx = {
    secondaryButton: {
        width: 34,
    },
};
