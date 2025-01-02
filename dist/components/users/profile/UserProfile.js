'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var UserProfile = function (props) {
    var _a;
    var _b = props || {}, user = _b.user, _c = _b.displayFields, displayFields = _c === void 0 ? [] : _c, _d = _b.socialFields, socialFields = _d === void 0 ? [] : _d, _e = _b.buttons, buttons = _e === void 0 ? [] : _e;
    var _f = user || {}, name = _f.name, username = _f.username, about_me = _f.about_me, avatar = _f.avatar;
    if (!(user === null || user === void 0 ? void 0 : user.id))
        return null;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col items-center justify-center rounded" },
        react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-start sm:space-x-4 max-w-[600px]" },
            react_1.default.createElement("div", { className: "flex flex-col items-center" },
                (avatar === null || avatar === void 0 ? void 0 : avatar.url) && (react_1.default.createElement(react_2.Image, { radius: "full", src: (_a = user === null || user === void 0 ? void 0 : user.avatar) === null || _a === void 0 ? void 0 : _a.url, alt: name })),
                react_1.default.createElement(__1.SocialFields, { fields: socialFields, resource: user })),
            react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                react_1.default.createElement(components_1.Typography, { variant: "caption", className: "text-foreground/70 w-full flex justify-center sm:justify-start" },
                    "@",
                    username),
                react_1.default.createElement(components_1.Typography, { variant: "h6", className: "w-full min-w-[200px] text-center sm:text-left" }, name),
                react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                    react_1.default.createElement(__1.ListFields, { resource: user, fields: displayFields }),
                    about_me && (react_1.default.createElement(__1.ExpandableText, { text: about_me, className: "text-foreground/70" })))),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "w-full flex justify-end items-start" },
                react_1.default.createElement(__1.ButtonActions, { buttons: buttons }))))));
};
exports.default = UserProfile;
