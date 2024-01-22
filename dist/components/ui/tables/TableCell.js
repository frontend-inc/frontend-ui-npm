"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableCell = function (props) {
    var _a = props.align, align = _a === void 0 ? "left" : _a, children = props.children, _b = props.header, header = _b === void 0 ? false : _b, _c = props.sticky, sticky = _c === void 0 ? false : _c;
    return (react_1.default.createElement(TableCell_1.default, { align: align, sx: __assign(__assign(__assign(__assign({}, sx.root), (header && sx.header)), (sticky && sx.stickyCell)), (header && sticky && sx.stickyHeader)) }, children));
};
exports.default = TableCell;
var sx = {
    root: {
        px: 1,
        minWidth: "100px",
        bgcolor: "background.paper",
    },
    header: {
        p: 0,
        whiteSpace: "nowrap",
    },
    stickyHeader: {
        position: "sticky",
        left: 0,
        minWidth: 40,
        zIndex: function (theme) { return theme.zIndex.modal - 1; },
    },
    stickyCell: {
        zIndex: function (theme) { return theme.zIndex.modal - 2; },
        position: "sticky",
        left: 0,
        minWidth: 40,
    },
};
