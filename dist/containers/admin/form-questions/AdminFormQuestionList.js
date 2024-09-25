"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminFormQuestionItem_1 = __importDefault(require("./AdminFormQuestionItem"));
var AdminFormQuestionToolbar_1 = __importDefault(require("./AdminFormQuestionToolbar"));
var AdminFormQuestionsAdd_1 = __importDefault(require("./AdminFormQuestionsAdd"));
var containers_1 = require("../../../containers");
var AdminFormQuestionsList = function (props) {
    var formId = props.formId;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var url = "".concat(apiUrl, "/forms/").concat(formId, "/form_questions");
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, sortable: true, url: url, name: 'form_questions', enableSearch: true, enableShow: true, enableDelete: true, enableCreate: true, toolbar: AdminFormQuestionToolbar_1.default, component: AdminFormQuestionItem_1.default, create: AdminFormQuestionsAdd_1.default, show: containers_1.AdminQuestionShow, emptyIcon: "Question", emptyTitle: "No questions", emptyDescription: "No questions added yet.", slots: {
            toolbar: {
                url: url,
                formId: formId,
            },
            show: {
                url: "".concat(apiUrl, "/questions"),
            },
            create: {
                url: "".concat(apiUrl, "/questions"),
                formId: formId,
            },
        } }));
};
exports.default = AdminFormQuestionsList;
