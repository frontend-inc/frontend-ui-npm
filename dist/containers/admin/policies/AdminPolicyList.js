"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var AdminPolicyForm_1 = __importDefault(require("./AdminPolicyForm"));
var AdminPolicysList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { sortable: true, url: "".concat(apiUrl, "/policies"), name: "policy", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, create: AdminPolicyForm_1.default, edit: AdminPolicyForm_1.default, component: __1.AdminPolicyItem, emptyIcon: "FileText", emptyTitle: "No policies", emptyDescription: "No policies yet." }));
};
exports.default = AdminPolicysList;
