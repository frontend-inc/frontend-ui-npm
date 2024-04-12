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
    var children = props.children, _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.mode, mode = _b === void 0 ? 'accent' : _b, _c = props.topNav, topNav = _c === void 0 ? false : _c, handleClick = props.handleClick, headerLinks = props.headerLinks, footerLinks = props.footerLinks, notifications = props.notifications, _d = props.enableAuth, enableAuth = _d === void 0 ? false : _d, _e = props.enableShopify, enableShopify = _e === void 0 ? false : _e, facebook = props.facebook, instagram = props.instagram, linkedin = props.linkedin, twitter = props.twitter, youtube = props.youtube, tiktok = props.tiktok, _f = props.pageMargin, pageMargin = _f === void 0 ? 201 : _f;
    var enableNotifications = (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0;
    return (react_1.default.createElement(material_1.Box, { sx: sx.layout },
        react_1.default.createElement(components_1.Alert, null),
        react_1.default.createElement(components_1.Notifications, { notifications: notifications }),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (!topNav && sx.sideNav)) },
            react_1.default.createElement(components_1.ModeTheme, { mode: mode },
                react_1.default.createElement(components_1.Header, { editing: editing, topNav: topNav, menuItems: headerLinks, enableNotifications: enableNotifications, handleClick: handleClick, enableAuth: enableAuth, enableShopify: enableShopify })),
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), (topNav ? sx.contentTopNav : sx.contentSideNav)) },
                react_1.default.createElement(components_1.LayoutScroll, null,
                    react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.page), { minHeight: {
                                sm: "calc(100vh - ".concat(pageMargin, "px)"),
                                xs: '100vh',
                            } }) }, children),
                    react_1.default.createElement(components_1.Footer, { menuItems: footerLinks, handleClick: handleClick, facebook: facebook, instagram: instagram, linkedin: linkedin, twitter: twitter, youtube: youtube, tiktok: tiktok }))))));
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
        bgcolor: 'background.default',
    },
    sideNav: {
        display: 'flex',
        flexDirection: {
            sm: 'row',
            xs: 'column',
        },
        pt: {
            sm: 0,
            xs: '60px',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    contentSideNav: {
        width: {
            sm: 'calc(100% - 280px)',
            xs: '100%',
        },
        height: '100%',
        maxHeight: '100vh',
        overflow: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    contentTopNav: {
        pt: '60px',
        minHeight: 'calc(100% - 60px)',
    },
    page: {
        width: '100%',
        bgcolor: 'background.default',
    },
};
