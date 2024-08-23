"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminUserItem_1 = __importDefault(require("./AdminUserItem"));
var AdminUserForm_1 = __importDefault(require("./AdminUserForm"));
var AdminUserEditForm_1 = __importDefault(require("./AdminUserEditForm"));
var AdminUserShow_1 = __importDefault(require("./AdminUserShow"));
var AdminUsersList = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = props.metafields, metafields = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(components_1.Resources, { enableBorder: true, url: "".concat(apiUrl, "/users"), name: "user", enableSearch: true, enableShow: true, enableEdit: true, enableDelete: true, enableCreate: true, sortOptions: [
            { name: 'first_name', label: 'First Name' },
            { name: 'last_name', label: 'Last Name' },
            { name: 'username', label: 'Username' },
            { name: 'created_at', label: 'Date' },
        ], fields: [
            { name: 'image', label: 'Logo', variant: 'image' },
            { name: 'name', label: 'Name', variant: 'string' },
        ], create: AdminUserForm_1.default, edit: AdminUserEditForm_1.default, show: AdminUserShow_1.default, component: AdminUserItem_1.default, slots: {
            edit: {
                metafields: metafields
            },
            show: {
                metafields: metafields
            }
        } }));
};
exports.default = AdminUsersList;
