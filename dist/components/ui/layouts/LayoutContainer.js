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
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var LayoutContainer = function (props) {
    var children = props.children, header = props.header, footer = props.footer, notifications = props.notifications, _a = props.sideNav, sideNav = _a === void 0 ? false : _a, _b = props.offsetY, offsetY = _b === void 0 ? 0 : _b, _c = props.roles, roles = _c === void 0 ? [] : _c, requireAuth = props.requireAuth, requireTeam = props.requireTeam, requirePaid = props.requirePaid;
    var _d = (0, react_1.useState)(false), enableNotifications = _d[0], setEnableNotifications = _d[1];
    (0, react_1.useEffect)(function () {
        if ((notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0) {
            setEnableNotifications(true);
        }
    }, [notifications]);
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.layout), { height: {
                sm: "calc(100vh - ".concat(offsetY, "px)"),
                xs: '100vh',
            } }) },
        react_1.default.createElement(components_1.Alert, null),
        (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0 && (react_1.default.createElement(components_2.Notifications, { notifications: notifications })),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (sideNav && sx.sideNav)) },
            header,
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.content), (sideNav ? sx.contentSideNav : sx.contentTopNav)), (enableNotifications && sx.contentNotifications)) },
                react_1.default.createElement(components_1.LayoutScroll, null,
                    react_1.default.createElement(components_1.AuthGuard, { roles: roles, requireAuth: requireAuth, requirePaid: requirePaid, requireTeam: requireTeam },
                        children,
                        footer))))));
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
    contentNotifications: {
        pb: '45px',
    },
    contentSideNav: {
        pt: {
            md: 0,
            sm: '60px',
        },
        width: {
            md: 'calc(100% - 280px)',
            xs: '100%',
        },
        height: '100%',
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
