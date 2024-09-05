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
var components_1 = require("../../../../components");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var DocumentInputWrapper = function (props) {
    var title = props.title, label = props.label, children = props.children, _a = props.defaultOpen, defaultOpen = _a === void 0 ? true : _a, _b = props.expandable, expandable = _b === void 0 ? false : _b, _c = props.disablePadding, disablePadding = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)(defaultOpen), open = _d[0], setOpen = _d[1];
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (!disablePadding && sx.padding)) },
        expandable && (react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.IconButton, { size: 'small', onClick: function () { return setOpen(!open); } },
                react_1.default.createElement(icons_material_1.KeyboardArrowDown, { sx: __assign(__assign({}, sx.icon), (!open && sx.rotateIcon)) })))),
        react_1.default.createElement(material_1.Box, { sx: sx.inputField },
            react_1.default.createElement(material_1.Box, { sx: sx.inputLabel },
                react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary" }, title),
                react_1.default.createElement(components_1.Label, { label: label })),
            react_1.default.createElement(material_1.Collapse, { in: open }, children))));
};
exports.default = DocumentInputWrapper;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    padding: {
        pb: 2,
    },
    inputLabel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputField: {
        flexGrow: {
            xs: 1,
            sm: 0.5,
        },
        width: '100%',
        pr: 0,
        pl: 1,
        borderLeft: '3px solid',
        borderColor: 'transparent',
        transition: 'border-color 0.3s ease-in-out',
        '&:hover': {
            borderColor: 'primary.main',
        },
    },
    icon: {
        height: 20,
        width: 20,
        borderRadius: 1,
        color: 'text.secondary',
        bgcolor: 'background.hover',
        transition: '0.2s',
        transform: 'rotate(0)',
    },
    rotateIcon: {
        transform: 'rotate(-90deg)',
    },
};
