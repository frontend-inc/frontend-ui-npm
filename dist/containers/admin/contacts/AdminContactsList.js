"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminContactsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { enableBorder: false, url: "".concat(apiUrl, "/contacts"), name: "contact", enableSearch: true, enableCreate: true, enableEdit: true, enableDelete: true, sortOptions: [
            { name: 'created_at', label: 'Date' },
            { name: 'name', label: 'Name' },
            { name: 'email', label: 'Email' },
            { name: 'phone', label: 'Phone' },
            { name: 'company', label: 'Company' },
        ], fields: [
            { name: 'name', label: 'Name', variant: 'string' },
            { name: 'email', label: 'Email', variant: 'string' },
            { name: 'phone', label: 'Phone', variant: 'string' },
            { name: 'company', label: 'Company', variant: 'string' },
            { name: 'message', label: 'Message', variant: 'text' },
        ], component: containers_1.AdminContactItem }));
};
exports.default = AdminContactsList;
