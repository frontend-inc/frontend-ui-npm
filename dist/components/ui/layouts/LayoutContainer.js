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
    var children = props.children, header = props.header, footer = props.footer, notifications = props.notifications, _a = props.enableSideNav, enableSideNav = _a === void 0 ? false : _a, _b = props.pageMargin, pageMargin = _b === void 0 ? 201 : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.layout },
        react_1.default.createElement(components_1.Alert, null),
        (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0 && (react_1.default.createElement(components_2.Notifications, { notifications: notifications })),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableSideNav && sx.sideNav)) },
            header,
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), (enableSideNav ? sx.contentSideNav : sx.contentTopNav)) },
                react_1.default.createElement(components_1.LayoutScroll, null,
                    react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.page), { minHeight: {
                                sm: "calc(100vh - ".concat(pageMargin, "px)"),
                                xs: '100vh',
                            } }) }, children),
                    footer)))));
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
            md: 'row',
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
            md: 'calc(100% - 280px)',
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
