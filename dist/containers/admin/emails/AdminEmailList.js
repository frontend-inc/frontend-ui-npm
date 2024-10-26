'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminEmailForm_1 = __importDefault(require("./AdminEmailForm"));
var AdminEmailsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { url: "".concat(apiUrl, "/emails"), name: "email", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            sort_by: 'name',
            sort_direction: 'asc',
        }, edit: AdminEmailForm_1.default, create: AdminEmailForm_1.default, component: containers_1.AdminEmailItem, emptyIcon: "MessageSquare", emptyTitle: "No email templates", emptyDescription: "No email templates yet." }));
};
exports.default = AdminEmailsList;
