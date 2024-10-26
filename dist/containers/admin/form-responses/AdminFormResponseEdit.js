'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminFormResponseEdit = function (props) {
    var formId = (props || {}).formId;
    var _a = (0, hooks_1.useAdminForms)(), loading = _a.loading, form = _a.form, findForm = _a.findForm;
    var _b = (0, react_1.useState)([]), fields = _b[0], setFields = _b[1];
    (0, react_1.useEffect)(function () {
        if (formId) {
            findForm(formId);
        }
    }, [formId]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (form === null || form === void 0 ? void 0 : form.id) {
            var formFields = (_a = form === null || form === void 0 ? void 0 : form.questions) === null || _a === void 0 ? void 0 : _a.map(function (question) { return ({
                label: question.title,
                name: question.name,
                variant: question.variant,
            }); });
            setFields(formFields);
        }
    }, [form]);
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields }));
};
exports.default = AdminFormResponseEdit;
