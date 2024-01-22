"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var CellBelongsTo = function (props) {
    var value = props.value, displayValue = props.displayValue, headerName = props.headerName, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Box, { sx: sx.cell },
        react_1.default.createElement(material_1.Button, { fullWidth: true, size: "small", color: "primary", variant: "outlined", sx: sx.button, endIcon: react_1.default.createElement(icons_material_1.TurnSlightRight, null), onClick: handleClick }, displayValue)));
};
exports.default = CellBelongsTo;
var sx = {
    cell: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
    },
    avatar: {
        bgcolor: "background.paper",
    },
    button: {
        textTransform: "none",
        letterSpacing: 0,
    },
};
