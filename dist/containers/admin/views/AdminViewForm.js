'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminViewForm = function (props) {
    var errors = props.errors, view = props.view, handleChange = props.handleChange;
    return (react_1.default.createElement(components_1.FormFields, { resource: view, errors: errors, handleChange: handleChange, fields: [
            {
                label: 'Name',
                name: 'name',
                placeholder: 'Name',
                variant: 'string',
            },
        ] }));
};
exports.default = AdminViewForm;
