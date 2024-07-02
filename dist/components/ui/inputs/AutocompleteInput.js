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
var __1 = require("../..");
var material_1 = require("@mui/material");
var AutocompleteInput = function (props) {
    var _a = props || {}, _b = _a.name, name = _b === void 0 ? 'title' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, label = _a.label, _d = _a.placeholder, placeholder = _d === void 0 ? 'Search' : _d, handleChange = _a.handleChange, handleInputChange = _a.handleInputChange, _e = _a.options, options = _e === void 0 ? [] : _e, _f = _a.direction, direction = _f === void 0 ? 'column' : _f;
    var _g = (0, react_1.useState)(false), open = _g[0], setOpen = _g[1];
    var handleClick = function (option) {
        setOpen(false);
        handleChange({
            target: {
                name: name,
                value: option === null || option === void 0 ? void 0 : option.value,
            },
        });
    };
    var handleKeywordChange = function (ev) {
        var value = ev.target.value;
        handleInputChange(value);
        if ((options === null || options === void 0 ? void 0 : options.length) > 0)
            setOpen(true);
        if (value == '') {
            setOpen(false);
        }
    };
    return (react_1.default.createElement(material_1.ClickAwayListener, { onClickAway: function () { return setOpen(false); } },
        react_1.default.createElement(material_1.Stack, { width: '100%', direction: "column", spacing: 1 },
            react_1.default.createElement(__1.TextInput, { name: name, label: label, value: value, options: options, handleChange: handleKeywordChange, direction: direction, placeholder: placeholder, onFocus: function () { return setOpen(!open); } }),
            react_1.default.createElement(material_1.Box, { sx: sx.anchor }, open && (react_1.default.createElement(material_1.Paper, { elevation: 2, sx: __assign(__assign({}, sx.paper), { height: (options === null || options === void 0 ? void 0 : options.length) * 64 }) },
                react_1.default.createElement(material_1.List, { dense: true, sx: sx.list }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(material_1.ListItem, null,
                    react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleClick(option); } },
                        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                            (option === null || option === void 0 ? void 0 : option.image) && (react_1.default.createElement(material_1.Avatar, { alt: option.label, src: option.image, sx: sx.avatar })),
                            (option === null || option === void 0 ? void 0 : option.icon) && react_1.default.createElement(__1.Icon, { name: option.icon, size: 20 })),
                        react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", sx: sx.label }, option.label) })))); }))))))));
};
exports.default = AutocompleteInput;
var sx = {
    anchor: {
        position: 'relative',
    },
    paper: {
        p: 0,
        position: 'absolute',
        top: -6,
        left: 0,
        width: '100%',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        maxHeight: '220px',
        overflowY: 'scroll',
        zIndex: function (theme) { return theme.zIndex.modal; },
    },
    avatar: {
        borderRadius: 1,
    },
    list: {
        bgcolor: 'background.paper',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1,
    },
    listItemButton: {
        px: 1,
        py: 0,
        height: 44,
    },
    listItemIcon: {
        width: 44,
        minWidth: 44
    },
    mapContainer: {
        overflow: 'hidden',
    },
    label: {
        width: '100%',
        textAlign: 'left'
    }
};
