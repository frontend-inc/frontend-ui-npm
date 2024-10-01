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
var AdminQuestionEdit = function (props) {
    var fields = [
        { label: 'Image', name: 'image', variant: 'image' },
        { label: 'Question', name: 'title', variant: 'string' },
        { label: 'Description', name: 'description', variant: 'text' },
        { label: 'API name', name: 'name', variant: 'nospace' },
        {
            label: 'Question type',
            name: 'variant',
            variant: 'select',
            options: [
                {
                    icon: 'ListChecks',
                    value: 'multiple_choice',
                    label: 'Multiple choice',
                },
                { icon: 'ListTodo', value: 'single_choice', label: 'Single choice' },
                { icon: 'List', value: 'array', label: 'Array' },
                { icon: 'MenuSquare', value: 'select', label: 'Select' },
                { icon: 'Calendar', value: 'date', label: 'Date' },
                { icon: 'Type', value: 'string', label: 'String' },
                { icon: 'MapPin', value: 'location', label: 'Location' },
                { icon: 'FileText', value: 'text', label: 'Text' },
                { icon: 'Hash', value: 'number', label: 'Number' },
                { icon: 'Star', value: 'rating', label: 'Rating' },
                { icon: 'DollarSign', value: 'price', label: 'Price' },
                { icon: 'Link', value: 'url', label: 'URL' },
                { icon: 'Image', value: 'image', label: 'Image' },
                { icon: 'File', value: 'file', label: 'File' },
            ],
        },
        {
            label: 'Options',
            name: 'optoins',
            variant: 'array',
        },
    ];
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields }));
};
exports.default = AdminQuestionEdit;
