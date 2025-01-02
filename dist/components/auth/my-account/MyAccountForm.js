'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var MyAccountForm = function (props) {
    var loading = props.loading, errors = props.errors, user = props.user, handleSubmit = props.handleSubmit, handleChange = props.handleChange, handleDeleteAvatar = props.handleDeleteAvatar;
    var formFields = constants_1.ACCOUNT_FORM_FIELDS;
    formFields = __spreadArray(__spreadArray([], formFields, true), [
        {
            label: 'Accept email marketing',
            name: 'accepts_marketing',
            variant: 'boolean',
        },
    ], false);
    return (react_1.default.createElement(components_1.Form, { loading: loading, errors: errors, 
        //@ts-ignore
        fields: formFields, resource: user, handleChange: handleChange, handleRemove: handleDeleteAvatar, handleSubmit: handleSubmit, buttonText: "Save" }));
};
exports.default = MyAccountForm;
