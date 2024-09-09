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
var CommentButton = function (props) {
    var resource = props.resource, _a = props.size, size = _a === void 0 ? 'small' : _a, _b = props.color, color = _b === void 0 ? 'text.secondary' : _b;
    var _c = (0, frontend_js_1.useResourceContext)(), openShow = _c.openShow, setOpenShow = _c.setOpenShow, setResource = _c.setResource;
    var handleClick = function () {
        setResource(resource);
        setOpenShow(!openShow);
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.IconButton, { onClick: handleClick, sx: __assign(__assign(__assign({}, sx.icon), (size == 'large' && sx.large)), { color: color, '&:hover': {
                    color: color,
                } }) },
            react_1.default.createElement(icons_material_1.ChatBubbleOutline, { fontSize: "small" }))));
};
exports.default = CommentButton;
var sx = {
    icon: {
        bgcolor: 'background.main',
        color: 'text.secondary',
        '&:hover': {
            bgcolor: 'background.main',
            color: 'text.secondary',
        },
    },
    large: {
        border: '1px solid',
        borderColor: 'divider',
    },
};
