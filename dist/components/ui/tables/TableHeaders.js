'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var TableHeaders = function (props) {
    var fields = props.fields, checked = props.checked, _a = props.sortBy, sortBy = _a === void 0 ? 'id' : _a, _b = props.sortDirection, sortDirection = _b === void 0 ? 'asc' : _b, _c = props.enableSelect, enableSelect = _c === void 0 ? false : _c, _d = props.enableEdit, enableEdit = _d === void 0 ? false : _d, _e = props.enableDelete, enableDelete = _e === void 0 ? false : _e, _f = props.enableShow, enableShow = _f === void 0 ? false : _f, handleSort = props.handleSort, handleSelectAll = props.handleSelectAll;
    // Wrapping in <TableHead /> causes nextjs react hydration errors
    // so we place the headers in the <TableBody /> component
    return (react_1.default.createElement(frontend_shadcn_1.TableRow, null,
        enableSelect && (react_1.default.createElement(components_1.TableCell, { variant: "head", sticky: true, header: true, small: true },
            react_1.default.createElement("div", { className: "mx-2" },
                react_1.default.createElement(core_1.Checkbox, { value: checked, handleChange: handleSelectAll })))),
        (enableEdit || enableDelete || enableShow) && (react_1.default.createElement(components_1.TableCell, { variant: "head", header: true, small: true },
            react_1.default.createElement("div", null))), fields === null || fields === void 0 ? void 0 :
        fields.map(function (field, index) { return (react_1.default.createElement(components_1.TableCell, { header: true, key: index },
            react_1.default.createElement(components_1.CellHeader, { field: field, sortBy: sortBy, sortDirection: sortDirection, handleSort: handleSort }))); })));
};
exports.default = TableHeaders;
