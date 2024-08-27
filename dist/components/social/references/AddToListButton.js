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
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var AddToList = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'icon' : _a, resource = props.resource, _b = props.color, color = _b === void 0 ? 'text.secondary' : _b;
    var _c = (0, frontend_js_1.useResourceContext)(), openReferences = _c.openReferences, setOpenReferences = _c.setOpenReferences, setResource = _c.setResource;
    var handleClick = function () {
        setResource(resource);
        setOpenReferences(!openReferences);
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.IconButton, { onClick: handleClick, sx: __assign({ color: color, '&:hover': {
                    color: color,
                } }, (variant == 'icon' ? sx.icon : sx.button)) },
            react_1.default.createElement(icons_material_1.PlaylistAdd, { fontSize: "small" }))));
};
exports.default = AddToList;
var sx = {
    icon: {},
    button: {
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.main',
        color: 'text.secondary',
        '&:hover': {
            bgcolor: 'background.main',
            color: 'text.secondary',
        },
    },
};
