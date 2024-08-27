"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../../..");
var frontend_js_1 = require("frontend-js");
var DataToolbarModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), _b = _a.selected, selected = _b === void 0 ? [] : _b, handleClear = _a.handleClear;
    var children = (props || {}).children;
    var open = selected.length > 0;
    var handleClose = function () {
        handleClear();
    };
    return (react_1.default.createElement(material_1.Collapse, { in: open },
        react_1.default.createElement(material_1.Paper, { elevation: 0, sx: sx.root },
            react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%" },
                react_1.default.createElement(material_1.Box, { width: "100%" }, children),
                react_1.default.createElement(material_1.Box, { sx: sx.iconButton },
                    react_1.default.createElement(material_1.IconButton, { onClick: handleClose },
                        react_1.default.createElement(__1.Icon, { name: "X", size: 20 })))))));
};
exports.default = DataToolbarModal;
var sx = {
    root: {
        mb: 1,
    },
    appBar: {
        m: 0,
        top: '-10px',
    },
    iconButton: {
        width: '40px',
        height: '40px',
    }
};
