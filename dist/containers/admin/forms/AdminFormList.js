'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminFormItem_1 = __importDefault(require("./AdminFormItem"));
var AdminFormCreate_1 = __importDefault(require("./AdminFormCreate"));
var AdminFormEdit_1 = __importDefault(require("./AdminFormEdit"));
var AdminFormShow_1 = __importDefault(require("./AdminFormShow"));
var AdminFormToolbar_1 = __importDefault(require("./AdminFormToolbar"));
var navigation_1 = require("next/navigation");
var AdminFormsList = function () {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var handleClick = function (form) {
        router.push("".concat(clientUrl, "/users/forms/").concat(form.handle, "/questions"));
    };
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, url: "".concat(apiUrl, "/forms"), name: 'form', enableSearch: true, enableEdit: true, enableDelete: true, enableCreate: true, handleClick: handleClick, sortOptions: [
            { name: 'title', label: 'Title' },
            { name: 'created_at', label: 'Date' },
        ], create: AdminFormCreate_1.default, edit: AdminFormEdit_1.default, show: AdminFormShow_1.default, toolbar: AdminFormToolbar_1.default, component: AdminFormItem_1.default, emptyIcon: "Text", emptyTitle: "No forms", emptyDescription: "No forms added yet." }));
};
exports.default = AdminFormsList;
