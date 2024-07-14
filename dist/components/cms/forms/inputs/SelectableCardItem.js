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
var components_1 = require("../../../../components");
var SelectableCardItem = function (props) {
    var _a = props || {}, title = _a.title, description = _a.description, image = _a.image, handleClick = _a.handleClick, _b = _a.selected, selected = _b === void 0 ? false : _b;
    return (react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleClick },
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign(__assign({}, sx.root), (selected && sx.selected)) },
            react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                react_1.default.createElement(components_1.Image, { src: image, height: 200, alt: title, disableBorderRadius: true })),
            react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.content },
                react_1.default.createElement(material_1.Stack, { spacing: 0 },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "body1" }, title),
                    description && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2" }, description)))))));
};
exports.default = SelectableCardItem;
var sx = {
    root: {
        width: '100%',
        border: '3px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden',
        minWidth: '200px',
    },
    selected: {
        border: '3px solid',
        borderColor: 'primary.main',
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    content: {
        minHeight: '60px',
        p: 1,
        pt: 0,
    },
    title: {
        minHeight: '50px',
    },
    description: {
        maxWidth: '320px',
    },
};
