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
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var Modal = function (props) {
    var open = props.open, _a = props.loading, loading = _a === void 0 ? false : _a, handleClose = props.handleClose, title = props.title, subtitle = props.subtitle, actions = props.actions, children = props.children, maxWidth = props.maxWidth, secondaryActions = props.secondaryActions, _b = props.p, p = _b === void 0 ? 1 : _b, fullScreen = props.fullScreen, _c = props.enableCancel, enableCancel = _c === void 0 ? false : _c, _d = props.hideBackdrop, hideBackdrop = _d === void 0 ? false : _d;
    var isMobile = (0, hooks_1.useResponsive)().isMobile;
    return (react_1.default.createElement(material_1.Dialog, { sx: sx.root, fullWidth: true, maxWidth: maxWidth || 'sm', fullScreen: isMobile || fullScreen === true ? true : false, open: open, onClose: handleClose, hideBackdrop: hideBackdrop },
        react_1.default.createElement(material_1.DialogTitle, { sx: sx.dialogTitleContainer },
            react_1.default.createElement(material_1.Box, { sx: sx.dialogTitleContent },
                react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "textPrimary", sx: sx.title }, title),
                !loading && (react_1.default.createElement(material_1.Box, { sx: sx.secondaryActions },
                    secondaryActions && secondaryActions,
                    react_1.default.createElement(material_1.IconButton, { onClick: handleClose },
                        react_1.default.createElement(components_1.Icon, { name: "X" })))))),
        react_1.default.createElement(material_1.DialogContent, { sx: __assign(__assign({}, sx.dialogContent), { p: p }) },
            subtitle && (react_1.default.createElement(material_1.Typography, { variant: "body1", mt: 1 }, subtitle)),
            react_1.default.createElement(components_1.Loader, { loading: loading }),
            !loading && react_1.default.createElement(material_1.Box, { sx: sx.content }, children)),
        !loading && (react_1.default.createElement(material_1.DialogActions, { sx: sx.dialogActions },
            enableCancel && (react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleClose }, "Cancel")),
            actions && actions))));
};
exports.default = Modal;
var sx = {
    root: {
        borderRadius: function (theme) { return theme.shape.borderRadius; },
    },
    title: {},
    dialogTitleContainer: {
        py: 0,
        bgcolor: 'background.default',
    },
    dialogTitleContent: {
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dialogContent: {
        height: '100%',
        bgcolor: 'background.default',
    },
    dialogActions: {
        bgcolor: 'background.default',
    },
    secondaryActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        height: '100%',
        width: '100%',
    },
};
