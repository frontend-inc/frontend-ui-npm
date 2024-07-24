"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var __1 = require("../..");
var UserListItem_1 = __importDefault(require("../cards/UserListItem"));
var constants_1 = require("../../../constants");
var router_1 = require("next/router");
var UserList = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, href = _a.href, _b = _a.enableLocation, enableLocation = _b === void 0 ? false : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, _d = _a.socialFields, socialFields = _d === void 0 ? [] : _d;
    var handleClick = function (user) {
        if (href) {
            router.push("".concat(clientUrl).concat(href, "/").concat(user === null || user === void 0 ? void 0 : user.username));
        }
    };
    var filterOptions = [];
    if (enableLocation) {
        filterOptions = [
            //@ts-ignore
            {
                label: 'City',
                field: 'city',
                variant: 'multiple_choice',
                options: constants_1.STATES
            },
            //@ts-ignore
            {
                label: 'Country',
                field: 'country',
                variant: 'multiple_choice',
                options: constants_1.COUNTRIES
            }
        ];
    }
    return (react_1.default.createElement(__1.ResourceList, { dense: true, enableSearch: true, enableLoadMore: true, name: "user", url: '/api/v1/cms/users', handleClick: handleClick, component: UserListItem_1.default, itemProps: {
            size: 72,
            displayFields: displayFields,
            socialFields: socialFields
        }, filterOptions: filterOptions, sortOptions: [
            { label: 'Username', name: 'username' },
            { label: 'First name', name: 'first_name' },
            { label: 'Last name', name: 'last_name' },
        ] }));
};
exports.default = UserList;
