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
var LocationOptionsList = function (props) {
    var _a = props || {}, open = _a.open, _b = _a.options, options = _b === void 0 ? [] : _b, handleClick = _a.handleClick;
    return (react_1.default.createElement(material_1.Box, { sx: sx.anchor }, open && (react_1.default.createElement(material_1.Paper, { sx: __assign(__assign({}, sx.container), { height: ((options === null || options === void 0 ? void 0 : options.length) || 0) * 58 }), elevation: 2 },
        react_1.default.createElement(material_1.List, { dense: true, disablePadding: true, sx: sx.list }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(material_1.ListItem, { sx: sx.listItem, disableGutters: true },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleClick(option); } },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(components_1.Icon, { name: "MapPin" })),
                react_1.default.createElement(material_1.ListItemText, { primary: option.value })))); }))))));
};
exports.default = LocationOptionsList;
var sx = {
    anchor: {
        position: 'relative',
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        maxHeight: '240px',
        overflowY: 'scroll',
        zIndex: function (theme) { return theme.zIndex.modal; },
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
    listItem: {
        p: 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    listItemButton: {
        px: 1,
        py: 0,
        minHeight: 58,
    },
    mapContainer: {
        overflow: 'hidden',
    },
};
