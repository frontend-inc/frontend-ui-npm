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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminUserForm = function (props) {
    var fields = [
        {
            label: 'First name',
            name: 'first_name',
            variant: 'string',
        },
        {
            label: 'Last name',
            name: 'last_name',
            variant: 'string',
        },
        {
            label: 'Username',
            name: 'username',
            variant: 'slugs',
        },
        {
            label: 'Email',
            name: 'email',
            variant: 'string',
            conditions: [{ name: 'id', operator: 'eq', value: undefined }],
        },
        {
            label: 'Role',
            name: 'role',
            variant: 'select',
            options: [
                { label: 'User', value: 'user' },
                { label: 'Admin', value: 'admin' },
            ],
        },
        {
            label: 'Paid',
            name: 'paid',
            variant: 'boolean',
        },
    ];
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields }));
};
exports.default = AdminUserForm;
