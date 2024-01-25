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
    var children = props.children, _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.mode, mode = _b === void 0 ? 'accent' : _b, _c = props.showIcons, showIcons = _c === void 0 ? true : _c, _d = props.topNav, topNav = _d === void 0 ? false : _d, handleClick = props.handleClick, menuItems = props.menuItems, notifications = props.notifications, _e = props.enableAuth, enableAuth = _e === void 0 ? false : _e, _f = props.enableHeader, enableHeader = _f === void 0 ? false : _f, _g = props.enableShopify, enableShopify = _g === void 0 ? false : _g;
    var enableNotifications = (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0;
    return (react_1.default.createElement(material_1.Box, { sx: sx.layout },
        react_1.default.createElement(components_1.Notifications, { notifications: notifications }),
        react_1.default.createElement(material_1.Box
        //@ts-ignore
        , { 
            //@ts-ignore
            sx: __assign(__assign({}, sx.root), (!topNav && sx.sideNav)) },
            enableHeader && (react_1.default.createElement(components_1.ModeTheme, { mode: mode },
                react_1.default.createElement(components_1.Header, { editing: editing, topNav: topNav, showIcons: showIcons, menuItems: menuItems, enableNotifications: enableNotifications, handleClick: handleClick, enableAuth: enableAuth, enableShopify: enableShopify }))),
            react_1.default.createElement(material_1.Box
            //@ts-ignore
            , { 
                //@ts-ignore
                sx: __assign(__assign(__assign({}, sx.content), (enableHeader && topNav && sx.contentHeader)), (topNav ? sx.contentTopNav : sx.contentSideNav)) },
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
            xs: '64px',
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100%',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    contentHeader: {
        pt: '60px',
    },
    contentSideNav: {
        width: {
            sm: 'calc(100% - 280px)',
            xs: '100%',
        },
    },
    contentTopNav: {
        minHeight: 'calc(100% - 60px)',
    },
};
