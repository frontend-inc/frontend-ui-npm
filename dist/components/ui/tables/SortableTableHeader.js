"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var SortableTableHeader = function (props) {
    var value = props.value, sortKey = props.sortKey, _a = props.sortable, sortable = _a === void 0 ? true : _a, sortDirection = props.sortDirection, handleSort = props.handleSort, children = props.children;
    var isActive = sortKey === value ? true : false;
    var renderIcon = function () {
        if (!sortable || !isActive)
            return null;
        return sortDirection == 'asc' ? react_1.default.createElement(icons_material_1.ExpandMore, null) : react_1.default.createElement(icons_material_1.ExpandLess, null);
    };
    return (react_1.default.createElement(material_1.TableCell, { align: "left", sortDirection: "asc" },
        react_1.default.createElement(material_1.Button, { color: "primary", endIcon: renderIcon(), onClick: function () { return sortable && handleSort(value); } }, children)));
};
exports.default = SortableTableHeader;
