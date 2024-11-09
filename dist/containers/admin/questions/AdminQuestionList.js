'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminQuestionListItem_1 = __importDefault(require("./AdminQuestionListItem"));
var AdminQuestionCreate_1 = __importDefault(require("./AdminQuestionCreate"));
var AdminQuestionEdit_1 = __importDefault(require("./AdminQuestionEdit"));
var AdminQuestionShow_1 = __importDefault(require("./AdminQuestionShow"));
var AdminQuestionToolbar_1 = __importDefault(require("./AdminQuestionToolbar"));
var AdminQuestionsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, url: "".concat(apiUrl, "/questions"), name: 'question', enableSearch: true, enableEdit: true, enableDelete: true, enableCreate: true, enableShow: true, sortOptions: [
            { name: 'title', label: 'Title' },
            { name: 'created_at', label: 'Date' },
        ], create: AdminQuestionCreate_1.default, edit: AdminQuestionEdit_1.default, show: AdminQuestionShow_1.default, toolbar: AdminQuestionToolbar_1.default, component: AdminQuestionListItem_1.default, emptyIcon: "Text", emptyTitle: "No questions", emptyDescription: "No questions added yet." }));
};
exports.default = AdminQuestionsList;
