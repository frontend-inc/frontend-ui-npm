"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var UserProfile = function (props) {
    var _a = props || {}, user = _a.user, _b = _a.enableFollowers, enableFollowers = _b === void 0 ? false : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, _d = _a.socialFields, socialFields = _d === void 0 ? [] : _d, _e = _a.buttons, buttons = _e === void 0 ? [] : _e;
    var _f = user || {}, name = _f.name, username = _f.username, about_me = _f.about_me, avatar = _f.avatar;
    if (!(user === null || user === void 0 ? void 0 : user.id))
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.container },
        react_1.default.createElement(material_1.Stack, { sx: sx.userContainer, direction: { sm: 'row', xs: 'column' }, spacing: { sm: 4, xs: 0 }, alignItems: "flex-start" },
            react_1.default.createElement(material_1.Stack, { direction: "column", alignItems: "center" },
                (avatar === null || avatar === void 0 ? void 0 : avatar.url) && (react_1.default.createElement(__1.UserAvatar, { user: user, size: 120, enableGradient: true })),
                react_1.default.createElement(__1.SocialFields, { fields: socialFields, resource: user })),
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
                react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary", sx: sx.username },
                    "@",
                    username),
                react_1.default.createElement(material_1.Typography, { variant: "h6", color: "text.primary", sx: sx.name }, name),
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
                    enableFollowers == true && react_1.default.createElement(__1.FollowButtonGroup, { user: user }),
                    react_1.default.createElement(__1.DisplayFields, { resource: user, fields: displayFields }),
                    about_me && (react_1.default.createElement(__1.ExpandableText, { text: about_me, color: "text.secondary" })))),
            react_1.default.createElement(material_1.Stack, { direction: "row", height: "100%", justifyContent: "flex-start" }, enableFollowers == true && react_1.default.createElement(__1.FollowButton, { user: user })),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement(material_1.Stack, { direction: "row", sx: sx.buttons },
                react_1.default.createElement(__1.ButtonActions, { numVisible: 1, buttons: buttons, resource: user, user: user }))))));
};
exports.default = UserProfile;
var sx = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
    },
    containerBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    userContainer: {
        maxWidth: 600,
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
    avatar: {
        width: 110,
        height: 110,
    },
    avatarContainer: {
        bgcolor: 'common.white',
        height: 126,
        width: 126,
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
};
