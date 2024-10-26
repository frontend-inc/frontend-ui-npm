'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AdminQuestionListItems_1 = __importDefault(require("./questions/AdminQuestionListItems"));
var components_1 = require("../../../components");
var AdminFormQuestionsAdd = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, handleReload = _a.handleReload, url = _a.url, formId = _a.formId;
    return (react_1.default.createElement(components_1.Sheet, { open: open, handleClose: handleClose, title: "Add Questions" },
        react_1.default.createElement(AdminQuestionListItems_1.default, { name: 'form_question', url: url, formId: formId, handleSuccess: handleReload })));
};
exports.default = AdminFormQuestionsAdd;
