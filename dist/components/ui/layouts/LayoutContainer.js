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
var LayoutContainer = function (props) {
    var children = props.children, _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.mode, mode = _b === void 0 ? 'accent' : _b, _c = props.topNav, topNav = _c === void 0 ? false : _c, handleClick = props.handleClick, menuItems = props.menuItems, notifications = props.notifications, _d = props.enableAuth, enableAuth = _d === void 0 ? false : _d, _e = props.enableHeader, enableHeader = _e === void 0 ? false : _e, _f = props.enableShopify, enableShopify = _f === void 0 ? false : _f;
    var enableNotifications = (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0;
    return (react_1.default.createElement(material_1.Box, { sx: sx.layout },
        react_1.default.createElement(components_1.Alert, null),
        react_1.default.createElement(components_1.Notifications, { notifications: notifications }),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (!topNav && sx.sideNav)) },
            enableHeader && (react_1.default.createElement(components_1.ModeTheme, { mode: mode },
                react_1.default.createElement(components_1.Header, { editing: editing, topNav: topNav, menuItems: menuItems, enableNotifications: enableNotifications, handleClick: handleClick, enableAuth: enableAuth, enableShopify: enableShopify }))),
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.content), (enableHeader && topNav && sx.contentHeader)), (topNav ? sx.contentTopNav : sx.contentSideNav)) },
                react_1.default.createElement(components_1.LayoutScroll, null, children)))));
};
exports.default = LayoutContainer;
var sx = {
    layout: {
        width: '100%',
        height: '100%',
    },
    root: {
        width: '100%',
        height: '100%',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        minHeight: '100%',
        bgcolor: 'background.default',
    },
    sideNav: {
        display: 'flex',
        flexDirection: {
            sm: 'row',
            xs: 'column',
        },
        height: '100vh',
        pt: {
            sm: 0,
            xs: '60px',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100%',
    },
    contentHeader: {
        pt: '60px',
    },
    contentSideNav: {
        width: {
            sm: 'calc(100% - 280px)',
            xs: '100%',
        },
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    contentTopNav: {
        minHeight: 'calc(100% - 60px)',
    },
};
