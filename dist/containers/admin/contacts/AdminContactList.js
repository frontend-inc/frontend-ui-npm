"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var AdminContactForm_1 = __importDefault(require("./AdminContactForm"));
var AdminContactList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { enableBorder: false, url: "".concat(apiUrl, "/contacts"), name: "contact", enableSearch: true, enableCreate: true, enableEdit: true, enableShow: true, enableDelete: true, filterOptions: [
            {
                field: 'source',
                label: 'Source',
                variant: 'multiple_choice',
                options: [
                    { label: 'Newsletter', value: 'newsletter' },
                    { label: 'Contact Us', value: 'contact' },
                    { label: 'Form', value: 'form' },
                ],
            },
        ], sortOptions: [
            { name: 'created_at', label: 'Date' },
            { name: 'name', label: 'Name' },
            { name: 'email', label: 'Email' },
            { name: 'phone', label: 'Phone' },
            { name: 'company', label: 'Company' },
        ], displayFields: [
            { name: 'name', label: 'Name', variant: 'string' },
            { name: 'email', label: 'Email', variant: 'string' },
            { name: 'phone', label: 'Phone', variant: 'string' },
            { name: 'company', label: 'Company', variant: 'string' },
            { name: 'reason', label: 'Reason', variant: 'string' },
            { name: 'source', label: 'Source', variant: 'string' },
            { name: 'message', label: 'Message', variant: 'text' },
            {
                name: 'accepts_marketing',
                label: 'Accepts marketing',
                variant: 'boolean',
            },
        ], edit: AdminContactForm_1.default, create: AdminContactForm_1.default, component: __1.AdminContactItem }));
};
exports.default = AdminContactList;
