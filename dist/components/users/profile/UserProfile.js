'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var __1 = require("../..");
var UserProfile = function (props) {
    var _a = props || {}, user = _a.user, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, _c = _a.socialFields, socialFields = _c === void 0 ? [] : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d;
    var _e = user || {}, name = _e.name, username = _e.username, about_me = _e.about_me, avatar = _e.avatar;
    if (!(user === null || user === void 0 ? void 0 : user.id))
        return null;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col items-center justify-center rounded" },
        react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-start sm:space-x-4 max-w-[600px]" },
            react_1.default.createElement("div", { className: "flex flex-col items-center" },
                (avatar === null || avatar === void 0 ? void 0 : avatar.url) && react_1.default.createElement(__1.UserAvatar, { user: user, size: 120, enableGradient: true }),
                react_1.default.createElement(__1.SocialFields, { fields: socialFields, resource: user })),
            react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                react_1.default.createElement(core_1.Typography, { variant: "caption", className: "text-muted-foreground w-full flex justify-center sm:justify-start" },
                    "@",
                    username),
                react_1.default.createElement(core_1.Typography, { variant: "h6", className: "w-full min-w-[200px] text-center sm:text-left" }, name),
                react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                    react_1.default.createElement(__1.DisplayFields, { resource: user, fields: displayFields }),
                    about_me && (react_1.default.createElement(__1.ExpandableText, { text: about_me, className: "text-muted-foreground" })))),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "w-full flex justify-end items-start" },
                react_1.default.createElement(__1.ButtonActions, { buttons: buttons }))))));
};
exports.default = UserProfile;
