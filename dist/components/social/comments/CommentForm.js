'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var CommentForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, comment = _a.comment, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit;
    return (react_1.default.createElement(components_2.AuthGuard, null,
        react_1.default.createElement("div", { className: "pl-0" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full items-start" },
                react_1.default.createElement(components_2.TextInput, { errors: errors, name: "body", value: comment === null || comment === void 0 ? void 0 : comment.body, handleChange: handleChange, placeholder: "Leave a comment...", className: "w-full" }),
                react_1.default.createElement(components_1.Button, { variant: "default", onClick: handleSubmit, disabled: loading, className: "flex items-center" },
                    loading && react_1.default.createElement(components_2.IconLoading, { className: "mr-2 h-4 w-4 animate-spin" }),
                    "Submit")))));
};
exports.default = CommentForm;
