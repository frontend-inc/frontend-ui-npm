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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var UserProfile = function (props) {
    var _a = props || {}, user = _a.user, href = _a.href, _b = _a.enableFollowing, enableFollowing = _b === void 0 ? false : _b, _c = _a.enableBorder, enableBorder = _c === void 0 ? false : _c;
    var _d = user || {}, name = _d.name, username = _d.username, bio = _d.bio, avatar = _d.avatar;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var router = (0, router_1.useRouter)();
    var handleClick = function () {
        if (clientUrl && href && username) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(href, "/").concat(username));
        }
    };
    if (!(user === null || user === void 0 ? void 0 : user.username)) {
        return (react_1.default.createElement(components_1.Placeholder, { icon: "UserCircle", title: "Please sign in", description: "Sign in to view the user profile" }));
    }
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.container), (enableBorder && sx.containerBorder)) },
        react_1.default.createElement(material_1.Stack, { sx: sx.profile, direction: { sm: 'row', xs: 'column' }, spacing: { sm: 4, xs: 0 }, alignItems: "flex-start" },
            react_1.default.createElement(material_1.Box, { height: "100%", sx: sx.avatarContainer }, (avatar === null || avatar === void 0 ? void 0 : avatar.url) && react_1.default.createElement(components_1.UserAvatar, { user: user, size: 120 })),
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
                react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary", sx: sx.username },
                    "@",
                    username),
                react_1.default.createElement(material_1.Typography, { variant: "h6", color: "text.primary", sx: sx.name }, name),
                enableFollowing == true && react_1.default.createElement(components_1.FollowCounts, { user: user }),
                bio && react_1.default.createElement(components_1.ExpandableText, { text: bio, color: "text.secondary" })),
            react_1.default.createElement(material_1.Stack, { direction: "row", height: "100%", justifyContent: "flex-start" }, enableFollowing == true && react_1.default.createElement(components_1.FollowButton, { user: user })))));
};
exports.default = UserProfile;
var sx = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    button: {
        boxShadow: 0,
        color: 'text.secondary',
    },
    name: {
        width: '100%',
        minWidth: 200,
        textAlign: {
            sm: 'left',
            xs: 'center',
        },
    },
    profile: {
        maxWidth: 600,
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarContainer: {
        height: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    username: {
        boxShadow: 0,
        width: '100%',
        display: 'flex',
        justifyContent: {
            sm: 'flex-start',
            xs: 'center',
        },
    },
};
