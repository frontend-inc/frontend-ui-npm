"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FollowUser = function (props) {
    var _a = props || {}, user = _a.resource, _b = _a.size, size = _b === void 0 ? 44 : _b;
    return (react_1.default.createElement(components_1.Resource, { resource: user, avatar: react_1.default.createElement(components_1.UserAvatar, { size: size, user: user }), title: user === null || user === void 0 ? void 0 : user.name, displayFields: [
            { label: 'Username', variant: 'string', name: 'display_username' },
            { label: 'Followers', variant: 'number', name: 'display_num_followers' },
        ], secondaryActions: react_1.default.createElement(components_1.FollowButton, { user: user }) }));
};
exports.default = FollowUser;
