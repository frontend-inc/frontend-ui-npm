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
var ExpandableList = function (props) {
    var label = props.label, children = props.children, enableBorder = props.enableBorder, _a = props.closed, closed = _a === void 0 ? false : _a;
    var _b = (0, react_1.useState)(!closed), open = _b[0], setOpen = _b[1];
    var handleToggleClick = function () {
        setOpen(!open);
    };
    return (react_1.default.createElement(material_1.List, { disablePadding: true, sx: __assign(__assign({}, sx.root), (enableBorder && sx.borderTop)) },
        label && (react_1.default.createElement(material_1.ListItem, { sx: sx.listItem, disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.IconButton, { onClick: handleToggleClick },
                react_1.default.createElement(icons_material_1.ChevronRight, { sx: __assign(__assign({}, sx.icon), (open && sx.expandMore)) })) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, disableRipple: true, onClick: handleToggleClick },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { sx: sx.label, variant: 'caption' }, label) })))),
        react_1.default.createElement(material_1.Collapse, { in: open, timeout: "auto", unmountOnExit: true }, children)));
};
exports.default = ExpandableList;
var sx = {
    root: {
        width: '100%',
        minWidth: 200,
        my: 0,
    },
    listItem: {
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        height: '40px',
    },
    listItemButton: {
        py: 0,
        px: 1,
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        height: '40px',
    },
    listItemIcon: {
        minWidth: '40px',
        width: '40px',
    },
    label: {
        py: 0,
        color: 'text.secondary',
        lineHeight: '1em',
    },
    icon: {
        color: 'text.secondary',
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
