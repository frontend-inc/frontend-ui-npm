"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminTeamsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { enableBorder: true, url: "".concat(apiUrl, "/teams"), name: "team", enableSearch: true, enableEdit: true, sortOptions: [
            { name: 'name', label: 'Name' },
            { name: 'created_at', label: 'Date' },
        ], fields: [
            { name: 'image', label: 'Logo', variant: 'image' },
            { name: 'name', label: 'Name', variant: 'string' },
        ], component: containers_1.AdminTeamItem }));
};
exports.default = AdminTeamsList;
