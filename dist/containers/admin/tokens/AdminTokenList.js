"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminTokenForm_1 = __importDefault(require("./AdminTokenForm"));
var AdminTokenList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { url: "".concat(apiUrl, "/tokens"), name: "token", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, filterOptions: [
            {
                label: 'Admin API Key',
                field: 'admin',
                variant: 'boolean',
            },
        ], edit: AdminTokenForm_1.default, create: AdminTokenForm_1.default, component: containers_1.AdminTokenItem, emptyIcon: "Key", emptyTitle: "No API Keys", emptyDescription: "No API keys yet." }));
};
exports.default = AdminTokenList;
