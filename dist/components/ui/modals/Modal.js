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
var theme_1 = require("../../../theme");
var Modal = function (props) {
    var open = props.open, _a = props.loading, loading = _a === void 0 ? false : _a, handleClose = props.handleClose, avatar = props.avatar, icon = props.icon, title = props.title, subtitle = props.subtitle, buttons = props.buttons, children = props.children, _b = props.maxWidth, maxWidth = _b === void 0 ? 'sm' : _b, secondaryActions = props.secondaryActions, _c = props.disablePadding, disablePadding = _c === void 0 ? false : _c, fullScreen = props.fullScreen, _d = props.enableCancel, enableCancel = _d === void 0 ? false : _d, _e = props.hideBackdrop, hideBackdrop = _e === void 0 ? false : _e, _f = props.disableClose, disableClose = _f === void 0 ? false : _f, _g = props.disableHeader, disableHeader = _g === void 0 ? false : _g;
    var isMobile = (0, hooks_1.useResponsive)().isMobile;
    return (react_1.default.createElement(material_1.Dialog, { sx: __assign(__assign({}, sx.root), { 
            // Manually reset the maxWidth breakpoints
            // since these are modifed in the Editor
            '& .MuiDialog-paper': {
                bgcolor: 'background.default',
                maxWidth: {
                    sm: isMobile || fullScreen
                        ? '100vw'
                        : theme_1.muiTheme.breakpoints.values[maxWidth],
                    xs: '100vw',
                },
            } }), fullWidth: true, fullScreen: isMobile || fullScreen === true, open: open, onClose: handleClose, hideBackdrop: hideBackdrop },
        !disableHeader && (react_1.default.createElement(material_1.DialogTitle, { sx: sx.dialogTitleContainer },
            react_1.default.createElement(material_1.Box, { sx: sx.dialogTitleContent },
                react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "center", spacing: 1 },
                    avatar,
                    icon && (react_1.default.createElement(components_1.Icon, { name: icon })),
                    react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "textPrimary", sx: sx.title }, title)),
                !loading && (react_1.default.createElement(material_1.Box, { sx: sx.secondaryActions },
                    secondaryActions && secondaryActions,
                    !disableClose && (react_1.default.createElement(material_1.IconButton, { onClick: handleClose },
                        react_1.default.createElement(components_1.Icon, { name: "X" })))))))),
        react_1.default.createElement(material_1.DialogContent, { sx: __assign(__assign({}, sx.dialogContent), (disablePadding && sx.disablePadding)) },
            subtitle && (react_1.default.createElement(material_1.Typography, { variant: "body1", mt: 1 }, subtitle)),
            react_1.default.createElement(components_1.Loader, { loading: loading }),
            !loading && react_1.default.createElement(material_1.Box, { sx: sx.content }, children)),
        !loading && (react_1.default.createElement(react_1.default.Fragment, null, (enableCancel || buttons) && (react_1.default.createElement(material_1.DialogActions, { sx: sx.dialogActions },
            enableCancel && (react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleClose }, "Cancel")),
            buttons && buttons))))));
};
exports.default = Modal;
var sx = {
    root: {
        borderRadius: 1,
    },
    title: {},
    dialogTitleContainer: {
        p: 0,
        px: 1,
        pl: 2,
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
        my: 1,
        height: '100%',
    },
    disablePadding: {
        m: 0,
        p: 0,
    },
    dialogActions: {
        borderTop: '1px solid',
        borderColor: 'divider',
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
