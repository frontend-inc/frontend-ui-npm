"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("components");
var TableHeaders = function (props) {
    var fields = props.fields, checked = props.checked, _a = props.sortBy, sortBy = _a === void 0 ? 'id' : _a, _b = props.sortDirection, sortDirection = _b === void 0 ? 'asc' : _b, _c = props.enableSelect, enableSelect = _c === void 0 ? false : _c, _d = props.enableEdit, enableEdit = _d === void 0 ? false : _d, handleSort = props.handleSort, handleSelectAll = props.handleSelectAll;
    return (react_1.default.createElement(material_1.TableHead, null,
        react_1.default.createElement(material_1.TableRow, null,
            enableSelect && (react_1.default.createElement(components_1.TableCell, { align: 'center', sticky: true, header: true },
                react_1.default.createElement(material_1.Checkbox, { checked: checked, onChange: handleSelectAll, value: "true" }))),
            enableEdit && react_1.default.createElement(components_1.TableCell, { header: true }), fields === null || fields === void 0 ? void 0 :
            fields.map(function (field, index) { return (react_1.default.createElement(components_1.TableCell, { header: true, key: index },
                react_1.default.createElement(components_1.CellHeader, { field: field, sortBy: sortBy, sortDirection: sortDirection, handleSort: handleSort }))); }))));
};
exports.default = TableHeaders;
