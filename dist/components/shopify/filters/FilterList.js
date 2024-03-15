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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var FilterList = function (props) {
    var label = props.label, count = props.count, _a = props.variant, variant = _a === void 0 ? 'subtitle2' : _a, _b = props.expandable, expandable = _b === void 0 ? true : _b, enableBorder = props.enableBorder, _c = props.disablePadding, disablePadding = _c === void 0 ? false : _c, children = props.children, _d = props.closed, closed = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(!closed), open = _e[0], setOpen = _e[1];
    var handleToggleClick = function () {
        if (expandable)
            setOpen(!open);
    };
    return (react_1.default.createElement(material_1.List, { disablePadding: true, sx: __assign(__assign(__assign({}, sx.root), (!disablePadding && sx.padding)), (enableBorder && sx.borderTop)) },
        label && (react_1.default.createElement(material_1.ListItem, { sx: sx.listItem, disablePadding: true, disableGutters: true, secondaryAction: expandable ? (react_1.default.createElement(material_1.IconButton, { onClick: handleToggleClick },
                react_1.default.createElement(icons_material_1.ChevronRight, { sx: __assign(__assign({}, sx.icon), (open && sx.expandMore)) }))) : null },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, disableRipple: true, onClick: handleToggleClick },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { sx: sx.label, variant: variant, color: 'text.primary' },
                        label,
                        " ",
                        count > 0 && "(".concat(count, ")")) })))),
        react_1.default.createElement(material_1.Collapse, { in: open, timeout: "auto", unmountOnExit: true }, children)));
};
exports.default = FilterList;
var sx = {
    root: {
        width: '100%',
    },
    padding: {
        px: 1,
    },
    listItem: {
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        height: '40px',
    },
    listItemButton: {
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        height: '40px',
    },
    listItemIcon: {
        minWidth: '40px',
        width: '40px',
    },
    label: {
        py: 0,
        lineHeight: '1em',
    },
    icon: {
        transition: 'transform 0.3s ease-in-out',
    },
    expandMore: {
        transform: 'rotate(90deg)',
    },
    borderTop: {
        borderTop: '1px solid',
        borderColor: 'divider',
    },
};
