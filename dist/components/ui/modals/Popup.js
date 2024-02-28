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
var material_1 = require("@mui/material");
var Popup = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, anchorEl = _a.anchorEl, children = _a.children, _b = _a.disablePadding, disablePadding = _b === void 0 ? false : _b, _c = _a.p, p = _c === void 0 ? 2 : _c;
    return (react_1.default.createElement(material_1.Popover, { open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.content), { p: p }), (disablePadding && sx.disablePadding)) }, children)));
};
exports.default = Popup;
var sx = {
    root: {
        '& .MuiPopover-paper': {
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        }
    },
    content: {
        maxHeight: '520px',
        maxWidth: '520px',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    disablePadding: {
        p: 0,
    },
};
