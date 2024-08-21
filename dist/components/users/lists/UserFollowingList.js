"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var UserListItem_1 = __importDefault(require("../cards/UserListItem"));
var UserFollowingList = function (props) {
    var _a = props || {}, user = _a.user, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, _c = _a.socialFields, socialFields = _c === void 0 ? [] : _c, enableFollowers = _a.enableFollowers;
    return (react_1.default.createElement(__1.Resources, { enableSearch: true, enableLoadMore: true, name: "user", url: "/api/v1/cms/users/".concat(user === null || user === void 0 ? void 0 : user.username, "/following"), component: UserListItem_1.default, itemProps: {
            size: 72,
            displayFields: displayFields,
            socialFields: socialFields,
            enableFollowers: enableFollowers,
        }, sortOptions: [
            { label: 'Username', name: 'username' },
            { label: 'First name', name: 'first_name' },
            { label: 'Last name', name: 'last_name' },
            { label: 'Total followers', name: 'num_followers' },
            { label: 'Total following', name: 'num_following' },
        ] }));
};
exports.default = UserFollowingList;
