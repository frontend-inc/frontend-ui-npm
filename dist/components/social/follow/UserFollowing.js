"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var FollowUser_1 = __importDefault(require("./FollowUser"));
var UserFollowing = function (props) {
    var user = (props || {}).user;
    return (react_1.default.createElement(__1.ResourceList, { enableSearch: true, enableLoadMore: true, name: 'user', url: "/api/v1/cms/users/".concat(user === null || user === void 0 ? void 0 : user.username, "/following"), component: FollowUser_1.default, componentProps: {
            size: 64
        }, enableSorting: true, sortOptions: [
            { label: 'Username', name: 'username' },
            { label: 'Total followers', name: 'num_followers' },
            { label: 'Total following', name: 'num_following' },
        ] }));
};
exports.default = UserFollowing;
