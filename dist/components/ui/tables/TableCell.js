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
    var _a = props.align, align = _a === void 0 ? 'left' : _a, children = props.children, _b = props.header, header = _b === void 0 ? false : _b, _c = props.sticky, sticky = _c === void 0 ? false : _c, _d = props.small, small = _d === void 0 ? false : _d, _e = props.variant, variant = _e === void 0 ? 'body' : _e;
    return (react_1.default.createElement(TableCell_1.default, { variant: variant, align: align, sx: __assign(__assign(__assign(__assign(__assign({}, sx.root), (small && sx.cellSmall)), (sticky && sx.cellSticky)), (header && sticky && sx.cellStickyHeader)), (header && sx.cellHeader)) }, children));
};
exports.default = TableCell;
var sx = {
    root: {
        px: 1,
        minWidth: '100px',
        bgcolor: 'background.default',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        whiteSpace: 'nowrap',
        maxWidth: '240px',
        borderBottom: '2px solid',
        borderColor: 'divider',
    },
    cellSmall: {
        minWidth: '40px',
        width: '40px',
    },
    cellHeader: {
        borderBottom: '2px solid',
        borderColor: 'divider',
        zIndex: 1,
        p: 0,
    },
    cellSticky: {
        position: 'sticky',
        left: 0,
        zIndex: 2,
    },
    cellStickyHeader: {
        zIndex: 3,
        borderBottom: '3px solid',
        borderColor: 'divider',
    },
};
