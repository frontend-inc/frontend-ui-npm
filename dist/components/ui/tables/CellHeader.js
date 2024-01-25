"use strict";
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
var CellHeader = function (props) {
    var field = props.field, sortBy = props.sortBy, sortDirection = props.sortDirection, handleSort = props.handleSort;
    var _a = (0, react_1.useState)(false), active = _a[0], setActive = _a[1];
    (0, react_1.useEffect)(function () {
        if (sortBy === (field === null || field === void 0 ? void 0 : field.name)) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }, [field, sortBy]);
    return (react_1.default.createElement(material_1.Button, { disableRipple: true, fullWidth: true, sx: sx.sortButton, onClick: function () { return handleSort(field); }, endIcon: active && (react_1.default.createElement(react_1.default.Fragment, null,
            sortDirection === 'asc' && react_1.default.createElement(icons_material_1.ExpandLess, { sx: sx.sortIcon }),
            sortDirection === 'desc' && react_1.default.createElement(icons_material_1.ExpandMore, { sx: sx.sortIcon }))) },
        react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.label }, field === null || field === void 0 ? void 0 : field.label)));
};
exports.default = CellHeader;
var sx = {
    root: {},
    button: {
        py: 0,
        px: 1,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        cursor: 'pointer',
    },
    label: {
        textTransform: 'lowercase',
        fontWeight: 500,
    },
    icon: {
        visibility: 'hidden',
        color: 'primary.main',
        height: 20,
        width: 20,
    },
    sortButtonGroup: {
        border: 'none',
        borderColor: 'transparent',
    },
    sortIcon: {
        height: 20,
        width: 20,
        color: 'text.secondary',
    },
    sortIconButton: {
        borderRight: '0px solid white !important',
    },
    sortButton: {
        borderRight: '0px solid white !important',
    },
};
