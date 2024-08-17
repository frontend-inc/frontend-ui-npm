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
var context_1 = require("../../../context");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var components_2 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminLayoutLeft = function (props) {
    var _a = props || {}, title = _a.title, children = _a.children;
    var _b = (0, react_1.useContext)(context_1.AdminContext), openLayoutLeft = _b.openLayoutLeft, setOpenLayoutLeft = _b.setOpenLayoutLeft;
    var breakpoint = (0, hooks_1.useResponsive)().breakpoint;
    (0, react_1.useEffect)(function () {
        if (breakpoint == 'md' || breakpoint == 'sm') {
            setOpenLayoutLeft(false);
        }
    }, [breakpoint]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Hidden, { smDown: true }, openLayoutLeft && (react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(components_1.AdminHeader, { title: title, buttons: react_1.default.createElement(components_1.ExpandLeftButton, null) }),
            react_1.default.createElement(material_1.Box, { sx: sx.container }, children)))),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(components_2.Drawer, { title: title, disablePadding: true, open: openLayoutLeft, handleClose: function () { return setOpenLayoutLeft(false); }, anchor: "left" }, children))));
};
exports.default = AdminLayoutLeft;
var sx = {
    root: {
        bgcolor: 'background.main',
        p: 0,
        overflowY: 'scroll',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        height: {
            sm: '100vh',
            xs: 'auto',
        },
        width: {
            xs: '100%',
            sm: '320px',
        },
        minWidth: {
            xs: '100%',
            sm: '320px',
        },
        ml: { xs: 0, sm: 'auto' },
        maxWidth: { xs: 'none', sm: 'none' },
        borderRight: '1px solid',
        borderColor: 'divider',
    },
    container: {
        height: {
            sm: 'calc(100vh - 50px)',
            xs: 'auto',
        },
        width: '100%',
    },
};
