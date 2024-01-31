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
var Table_1 = __importDefault(require("@mui/material/Table"));
var material_1 = require("@mui/material");
var TableContainer = function (props) {
    var children = props.children, _a = props.styles, styles = _a === void 0 ? {} : _a;
    return (react_1.default.createElement(material_1.TableContainer, { sx: __assign(__assign({}, sx.table), styles) },
        react_1.default.createElement(Table_1.default, { stickyHeader: true }, children)));
};
exports.default = TableContainer;
var sx = {
    table: {
        width: {
            sm: '100%',
            xs: '100vw',
        },
        bgcolor: 'background.main',
        '&::-webkit-scrollbar': {
            display: 'none',
            msOverflowStyle: 'none', //IE and Edge
            scrollbarWidth: 'none', // Firefox
        },
    },
};
