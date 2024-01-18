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
var core_1 = require("context/core");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var Alert = function () {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useContext)(core_1.AppContext), alert = _b.alert, setAlert = _b.setAlert;
    var handleClose = function () {
        setOpen(false);
        setAlert();
    };
    (0, react_1.useEffect)(function () {
        if (alert && (alert === null || alert === void 0 ? void 0 : alert.message)) {
            setOpen(true);
        }
    }, [alert]);
    (0, react_1.useEffect)(function () {
        if (open)
            setTimeout(function () { return setOpen(false); }, 2500);
    }, [open]);
    return (react_1.default.createElement(material_1.Fade, { in: open },
        react_1.default.createElement(material_1.Slide, { direction: "down", in: open },
            react_1.default.createElement(material_1.Box, { width: "100%", p: 0, sx: sx.root },
                react_1.default.createElement(material_1.Paper, { elevation: 4, sx: sx.alert },
                    react_1.default.createElement(material_1.List, { disablePadding: true },
                        react_1.default.createElement(material_1.ListItem, null,
                            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClose },
                                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", sx: sx.text }, (alert === null || alert === void 0 ? void 0 : alert.message) || '') }))),
                        react_1.default.createElement(material_1.ListItemSecondaryAction, null,
                            react_1.default.createElement(material_1.IconButton, { size: "small", onClick: handleClose },
                                react_1.default.createElement(icons_material_1.Clear, { sx: sx.icon })))))))));
};
exports.default = Alert;
var sx = {
    root: {
        position: 'fixed',
        zIndex: 2000,
        width: '100%',
        top: 30,
        left: 0,
    },
    alert: {
        p: 0,
        maxWidth: 500,
        m: '0 auto',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
    },
    text: {
        color: 'primary.contrastText',
    },
    icon: {
        color: 'primary.contrastText',
    },
    listItemButton: {
        p: 0,
    },
};
