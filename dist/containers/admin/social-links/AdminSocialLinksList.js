"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var AdminSocialLinkForm_1 = __importDefault(require("./AdminSocialLinkForm"));
var AdminSocialLinksList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { sortable: true, url: "".concat(apiUrl, "/social_links"), name: "social_link", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, create: AdminSocialLinkForm_1.default, edit: AdminSocialLinkForm_1.default, component: __1.AdminSocialLinkItem, emptyIcon: "Instagram", emptyTitle: "No social media", emptyDescription: "No social media yet." }));
};
exports.default = AdminSocialLinksList;
