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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FormWizard_1 = __importDefault(require("./FormWizard"));
var __1 = require("../..");
var FormWizardModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(__1.Modal, { fullScreen: true, disablePadding: true, open: open, handleClose: handleClose },
            react_1.default.createElement(FormWizard_1.default, __assign({}, props)))));
};
exports.default = FormWizardModal;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 200px)',
    },
    form: {
        px: 2,
        py: 4,
        width: '100%',
        maxWidth: '600px',
    },
};
