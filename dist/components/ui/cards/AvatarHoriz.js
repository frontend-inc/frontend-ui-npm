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
var helpers_1 = require("../../../helpers");
var AvatarHoriz = function (props) {
    var title = props.title, description = props.description, _a = props.textVariant, textVariant = _a === void 0 ? 'body1' : _a, image = props.image, _b = props.height, height = _b === void 0 ? 128 : _b, _c = props.width, width = _c === void 0 ? 128 : _c, handleClick = props.handleClick, _d = props.enableBorder, enableBorder = _d === void 0 ? false : _d, _e = props.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = props.enableOverlay, enableOverlay = _f === void 0 ? false : _f;
    return (react_1.default.createElement(material_1.List, { disablePadding: true, sx: __assign(__assign({}, sx.listItem), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true },
            react_1.default.createElement(material_1.ListItemButton, { sx: {
                    minHeight: height + 44,
                }, onClick: handleClick && handleClick },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(material_1.Avatar, { sx: __assign(__assign(__assign(__assign({}, sx.avatar), (enableGradient && sx.gradient)), (enableOverlay && sx.overlay)), { height: "".concat(height, "px"), width: "".concat(width, "px") }), src: image, alt: title },
                        react_1.default.createElement(material_1.Box, null))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: textVariant, color: "text.primary" }, title), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: sx.description }, (0, helpers_1.truncate)(description, 80)) })))));
};
exports.default = AvatarHoriz;
var sx = {
    listItem: {
        my: 0,
        p: 0,
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
    },
    avatar: {
        mr: 2,
        height: '64px',
        width: '64px',
        backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
    },
    description: {
        maxWidth: 320,
    },
};
