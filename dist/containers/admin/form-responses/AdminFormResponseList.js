"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminFormResponseItem_1 = __importDefault(require("./AdminFormResponseItem"));
var AdminFormResponseToolbar_1 = __importDefault(require("./AdminFormResponseToolbar"));
var AdminFormResponseShow_1 = __importDefault(require("./AdminFormResponseShow"));
var AdminFormResponseEdit_1 = __importDefault(require("./AdminFormResponseEdit"));
var AdminFormResponsesList = function (props) {
    var formId = props.formId;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var url = "".concat(apiUrl, "/forms/").concat(formId, "/form_responses");
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, url: url, name: 'form_questions', enableSearch: true, enableShow: true, enableEdit: true, enableDelete: true, toolbar: AdminFormResponseToolbar_1.default, component: AdminFormResponseItem_1.default, show: AdminFormResponseShow_1.default, edit: AdminFormResponseEdit_1.default, sortOptions: [
            { name: 'name', label: 'Name' },
            { name: 'email', label: 'Email' },
            { name: 'created_at', label: 'Date' },
        ], emptyIcon: "ListCheck", emptyTitle: "No responses", emptyDescription: "No forms have been submitted yet.", slots: {
            toolbar: {
                url: url,
                formId: formId,
            },
            show: {
                url: url,
                formId: formId,
            },
            edit: {
                url: url,
                formId: formId,
            },
        } }));
};
exports.default = AdminFormResponsesList;
