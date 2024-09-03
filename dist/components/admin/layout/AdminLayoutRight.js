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
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var hooks_2 = require("../../../hooks");
var AdminLayoutRight = function (props) {
    var children = props.children, title = props.title;
    var _a = (0, hooks_1.useAdmin)(), openLayoutRight = _a.openLayoutRight, setOpenLayoutRight = _a.setOpenLayoutRight;
    var breakpoint = (0, hooks_2.useResponsive)().breakpoint;
    (0, react_1.useEffect)(function () {
        if (breakpoint == 'md' || breakpoint == 'sm') {
            setOpenLayoutRight(false);
        }
    }, [breakpoint]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Hidden, { smDown: true }, openLayoutRight && react_1.default.createElement(material_1.Box, { sx: sx.root }, children)),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(components_1.Drawer, { disablePadding: true, title: title, open: openLayoutRight, handleClose: function () { return setOpenLayoutRight(false); } }, children))));
};
exports.default = AdminLayoutRight;
var sx = {
    root: {
        height: {
            sm: '100vh',
            xs: '100%',
        },
        width: 360,
        minWidth: 360,
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        overflowY: 'hidden',
    },
};
