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
var __1 = require("../..");
var UserListItem = function (props) {
    var _a = props || {}, user = _a.resource, _b = _a.size, size = _b === void 0 ? 44 : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, _d = _a.socialFields, socialFields = _d === void 0 ? [] : _d, enableFollowers = _a.enableFollowers, handleClick = _a.handleClick;
    return (react_1.default.createElement(__1.ResourceListItem, { enableBorder: true, handleClick: handleClick, resource: __assign(__assign({}, user), { title: user.name }), avatar: react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, alignItems: "center" },
            react_1.default.createElement(__1.UserAvatar, { size: size, user: user }),
            react_1.default.createElement(__1.SocialFields, { resource: user, fields: socialFields })), displayFields: displayFields, secondaryActions: enableFollowers && react_1.default.createElement(__1.FollowButton, { user: user }) }));
};
exports.default = UserListItem;
