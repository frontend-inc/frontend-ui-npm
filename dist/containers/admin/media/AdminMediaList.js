"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var AdminMediaList = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { grid: true, url: "".concat(apiUrl, "/storage"), name: "storage", enableCreate: true, enableDelete: true, enableShow: true, query: {
            sort_by: 'created_at',
            sort_direction: 'desc',
        }, edit: __1.AdminMediaForm, create: __1.AdminMediaForm, component: __1.AdminMediaItem, show: __1.AdminMediaShow, emptyIcon: "Image", emptyTitle: "No uploads", emptyDescription: "No uploads yet." }));
};
exports.default = AdminMediaList;
