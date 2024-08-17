"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var AdminLayoutTabs = function (props) {
    var children = (props || {}).children;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.icons }, children)));
};
exports.default = AdminLayoutTabs;
var sx = {
    root: {
        width: '60px',
        height: '100vh',
        bgcolor: 'background.main',
    },
    icons: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: {
            xs: '5px',
            sm: 0,
        },
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};
