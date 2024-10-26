'use client';
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var hooks_1 = require("../../../../hooks");
var containers_1 = require("../../../../containers");
var AdminQuestionListItem_1 = __importDefault(require("./AdminQuestionListItem"));
var AdminQuestionListToolbar_1 = __importDefault(require("./AdminQuestionListToolbar"));
var AdminQuestionListItems = function (props) {
    var _a = props || {}, url = _a.url, handleSuccess = _a.handleSuccess, formId = _a.formId, rest = __rest(_a, ["url", "handleSuccess", "formId"]);
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { direction: "column", selectable: true, enableSearch: true, enableCreate: true, enableDelete: true, url: "".concat(apiUrl, "/questions"), name: "question", toolbar: AdminQuestionListToolbar_1.default, component: AdminQuestionListItem_1.default, create: containers_1.AdminQuestionCreate, emptyIcon: "Search", emptyTitle: "No questions", emptyDescription: "No questions yet.", slots: {
            toolbar: {
                url: url,
                formId: formId,
                handleSuccess: handleSuccess,
            },
            header: {
                buttonText: 'New Question',
            },
        } }));
};
exports.default = AdminQuestionListItems;
