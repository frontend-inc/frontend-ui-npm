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
var components_2 = require("../../../components");
var LayoutContainer = function (props) {
    var children = props.children, notifications = props.notifications, _a = props.offsetY, offsetY = _a === void 0 ? 0 : _a, requireAuth = props.requireAuth, requirePaid = props.requirePaid, _b = props.roles, roles = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.layout), { height: {
                sm: "calc(100vh - ".concat(offsetY, "px)"),
                xs: '100vh',
            } }) },
        react_1.default.createElement(components_1.Alert, null),
        react_1.default.createElement(material_1.Box, { sx: __assign({}, sx.root) },
            react_1.default.createElement(material_1.Box, { sx: sx.content },
                react_1.default.createElement(components_1.AuthGuard, { roles: roles, requireAuth: requireAuth, requirePaid: requirePaid },
                    react_1.default.createElement(components_2.Notifications, { notifications: notifications }),
                    children)))));
};
exports.default = LayoutContainer;
var sx = {
    layout: {
        width: '100%',
        overflowY: 'hidden',
    },
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        bgcolor: 'background.default',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowY: 'hidden',
    },
    page: {
        width: '100%',
        bgcolor: 'background.default',
    },
};
