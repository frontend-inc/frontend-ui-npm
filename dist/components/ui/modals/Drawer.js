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
var material_2 = require("@mui/material");
var components_1 = require("../../../components");
var Drawer = function (props) {
    var open = props.open, title = props.title, _a = props.anchor, anchor = _a === void 0 ? 'right' : _a, handleClose = props.handleClose, children = props.children, actions = props.actions, _b = props.variant, variant = _b === void 0 ? 'temporary' : _b, _c = props.disablePadding, disablePadding = _c === void 0 ? false : _c, _d = props.closeIcon, closeIcon = _d === void 0 ? 'X' : _d, _e = props.fullWidth, fullWidth = _e === void 0 ? false : _e, _f = props.styles, styles = _f === void 0 ? {} : _f;
    return (react_1.default.createElement(material_1.SwipeableDrawer, { open: open, variant: variant, anchor: anchor, onOpen: handleClose, onClose: handleClose, PaperProps: {
            sx: __assign(__assign({}, sx.paper), styles),
        } },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (fullWidth && sx.fullWidth)) },
            react_1.default.createElement(material_1.Box, { sx: sx.header },
                react_1.default.createElement(material_1.Box, { sx: sx.headerAction }, anchor == 'right' && (react_1.default.createElement(material_2.IconButton, { onClick: handleClose },
                    react_1.default.createElement(components_1.Icon, { color: "text.primary", name: closeIcon })))),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "subtitle2" }, title)),
                react_1.default.createElement(material_1.Box, { sx: sx.headerAction }, anchor != 'right' && (react_1.default.createElement(material_2.IconButton, { onClick: handleClose },
                    react_1.default.createElement(components_1.Icon, { color: "text.primary", name: closeIcon }))))),
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.content), (actions && sx.contentActions)), (!disablePadding && sx.contentPadding)) }, children),
            actions && react_1.default.createElement(material_1.Box, { sx: sx.actions }, actions))));
};
exports.default = Drawer;
var sx = {
    root: {
        width: {
            xs: '100vw',
            md: '380px',
        },
        maxWidth: {
            sm: '380px',
            xs: '480px',
        },
    },
    fullWidth: {
        width: '100vw',
        maxWidth: '100vw',
    },
    icon: {
        color: 'text.secondary',
    },
    header: {
        display: 'flex',
        flexDirecton: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderBottom: '1px solid',
        borderColor: 'divider'
    },
    headerAction: {
        minWidth: '40px',
    },
    button: {
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
    },
    actions: {
        bgcolor: 'background.paper',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '60px',
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'row',
        p: 1,
    },
    paper: {
        zIndex: "9999 !important",
        bgcolor: 'background.default',
    },
    content: {
        width: '100%',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        maxHeight: 'calc(100vh - 60px)',
        pb: 4,
    },
    contentActions: {
        maxHeight: 'calc(100vh - 120px)',
    },
    contentPadding: {
        p: 2,
    },
};
