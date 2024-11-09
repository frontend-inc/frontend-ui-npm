'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminFormResponseListItem_1 = __importDefault(require("./AdminFormResponseListItem"));
var AdminFormResponseToolbar_1 = __importDefault(require("./AdminFormResponseToolbar"));
var AdminFormResponseShow_1 = __importDefault(require("./AdminFormResponseShow"));
var AdminFormResponseEdit_1 = __importDefault(require("./AdminFormResponseEdit"));
var AdminFormResponsesList = function (props) {
    var formId = props.formId;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var url = "".concat(apiUrl, "/forms/").concat(formId, "/form_responses");
    var _a = (0, hooks_1.useAdminForms)(), loading = _a.loading, form = _a.form, findForm = _a.findForm;
    var _b = (0, react_1.useState)([]), headers = _b[0], setHeaders = _b[1];
    (0, react_1.useEffect)(function () {
        if (formId) {
            findForm(formId);
        }
    }, [formId]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (form === null || form === void 0 ? void 0 : form.id) {
            var formHeaders = (_a = form === null || form === void 0 ? void 0 : form.questions) === null || _a === void 0 ? void 0 : _a.map(function (question) { return ({
                label: question.name,
                name: question.name,
                variant: question.variant,
                sortable: true,
            }); });
            setHeaders(formHeaders);
        }
    }, [form]);
    if (!headers.length)
        return null;
    return (react_1.default.createElement(components_1.ResourceTable, { selectable: true, url: url, headers: headers, name: 'form_response', enableSearch: true, enableShow: true, enableEdit: true, enableDelete: true, toolbar: AdminFormResponseToolbar_1.default, component: AdminFormResponseListItem_1.default, show: AdminFormResponseShow_1.default, edit: AdminFormResponseEdit_1.default, sortOptions: [
            { name: 'name', label: 'Name' },
            { name: 'email', label: 'Email' },
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
