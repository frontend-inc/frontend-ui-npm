"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var UserListItem_1 = __importDefault(require("../cards/UserListItem"));
var router_1 = require("next/router");
var UserList = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _a = props || {}, href = _a.href, _b = _a.enableLocation, enableLocation = _b === void 0 ? false : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, _d = _a.socialFields, socialFields = _d === void 0 ? [] : _d;
    var handleClick = function (user) {
        if (href) {
            router.push("".concat(clientUrl).concat(href, "/").concat(user === null || user === void 0 ? void 0 : user.username));
        }
    };
    return (react_1.default.createElement(__1.ResourceList, { enableSearch: true, enableLoadMore: true, name: "user", url: '/api/v1/cms/users', handleClick: handleClick, filterOptions: [], sortOptions: [
            { label: 'Username', name: 'username' },
            { label: 'First name', name: 'first_name' },
            { label: 'Last name', name: 'last_name' },
        ], component: UserListItem_1.default, slots: {
            list: {
                size: 72,
                displayFields: displayFields,
                socialFields: socialFields,
            },
        } }));
};
exports.default = UserList;
