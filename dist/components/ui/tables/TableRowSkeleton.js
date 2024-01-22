"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Table_1 = __importDefault(require("@mui/material/Table"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableHead_1 = __importDefault(require("@mui/material/TableHead"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var TableRowSkeleton = function (props) {
    var _a = props.numRows, numRows = _a === void 0 ? 10 : _a, _b = props.numColumns, numColumns = _b === void 0 ? 6 : _b;
    var rows = new Array(numRows).fill(0);
    var cells = new Array(numColumns).fill(0);
    return (react_1.default.createElement(Table_1.default, null,
        react_1.default.createElement(TableHead_1.default, null,
            react_1.default.createElement(TableRow_1.default, null, cells.map(function (cell, i) { return (react_1.default.createElement(TableCell_1.default, { key: i },
                react_1.default.createElement(material_1.Skeleton, { height: 14, sx: sx.skeleton, variant: "rectangular", animation: "wave" }))); }))),
        react_1.default.createElement(TableBody_1.default, null, rows.map(function (row, i) { return (react_1.default.createElement(TableRow_1.default, { key: i }, cells.map(function (cell, j) { return (react_1.default.createElement(TableCell_1.default, { sx: sx.tableCell, key: j },
            react_1.default.createElement(material_1.Skeleton, { height: 14, sx: sx.skeleton, variant: "rectangular", animation: "wave" }))); }))); }))));
};
exports.default = TableRowSkeleton;
var sx = {
    root: {
        width: "100%",
        height: {
            xs: "calc(100vh - 200px)",
            sm: "calc(100vh - 160px)",
        },
    },
    tableCell: {
        p: 1,
    },
    skeleton: {
        m: 0.5,
        opacity: 0.1,
        borderRadius: function (theme) { return theme.shape.borderRadius; },
        bgcolor: "text.secondary",
    },
};
