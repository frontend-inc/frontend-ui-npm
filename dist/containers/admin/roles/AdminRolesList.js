"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminRoleForm_1 = __importDefault(require("./AdminRoleForm"));
var AdminRolesList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.SortableResourceList, { url: "".concat(apiUrl, "/roles"), name: "role", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, create: AdminRoleForm_1.default, edit: AdminRoleForm_1.default, component: containers_1.AdminRoleItem, emptyIcon: "Users", emptyTitle: "No roles", emptyDescription: "No user roles yet." }));
};
exports.default = AdminRolesList;
