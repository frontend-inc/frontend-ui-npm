'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var lodash_1 = require("lodash");
var frontend_shadcn_1 = require("frontend-shadcn");
var TableRow = function (props) {
    var row = props.row, fields = props.fields, _a = props.enableEdit, enableEdit = _a === void 0 ? false : _a, _b = props.enableDelete, enableDelete = _b === void 0 ? false : _b, _c = props.enableShow, enableShow = _c === void 0 ? false : _c, _d = props.enableSelect, enableSelect = _d === void 0 ? false : _d, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleShow = props.handleShow, selectedIds = props.selectedIds, handleSelect = props.handleSelect;
    var selected = (selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(row === null || row === void 0 ? void 0 : row.id)) ? true : false;
    return (react_1.default.createElement(frontend_shadcn_1.TableRow, null,
        enableSelect && (react_1.default.createElement(components_1.TableCell, { small: true, sticky: true },
            react_1.default.createElement("div", { className: "mx-2" },
                react_1.default.createElement(components_2.Checkbox, { name: "select-".concat(row.id), value: selected, 
                    //@ts-ignore
                    handleChange: handleSelect ? function () { return handleSelect(row); } : undefined })))),
        (enableEdit || enableDelete) && (react_1.default.createElement(components_1.TableCell, { small: true },
            react_1.default.createElement("div", { className: "flex flex-row space-x-1" },
                enableShow && (react_1.default.createElement(components_2.Button, { size: "sm", color: "secondary", onClick: handleShow ? function () { return handleShow(row); } : undefined }, "View")),
                enableEdit && (react_1.default.createElement(components_2.Button, { size: "sm", variant: "secondary", onClick: handleEdit ? function () { return handleEdit(row); } : undefined }, "Edit")),
                enableDelete && (react_1.default.createElement(components_2.Button, { size: "sm", variant: "secondary", onClick: handleDelete ? function () { return handleDelete(row); } : undefined }, "Delete"))))), fields === null || fields === void 0 ? void 0 :
        fields.map(function (field, index) {
            var value = (0, lodash_1.get)(row, field.name);
            return (react_1.default.createElement(components_1.TableCell, { key: index },
                react_1.default.createElement(components_1.Cell, { row: row, field: field, value: value, handleClick: handleClick ? function () { return handleClick(value, row, field); } : undefined })));
        })));
};
exports.default = TableRow;
