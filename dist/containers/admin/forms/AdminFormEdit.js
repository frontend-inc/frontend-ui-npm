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
var AdminFormEdit = function (props) {
    var fields = [
        { label: 'Image', name: 'image', variant: 'media' },
        { label: 'Handle', name: 'handle', variant: 'string' },
        { label: 'Title', name: 'title', variant: 'string' },
        { label: 'Description', name: 'description', variant: 'text' },
        { label: 'Button Text', name: 'button_text', variant: 'string' },
        { label: 'Completed Title', name: 'end_title', variant: 'string' },
        {
            label: 'Completed Description',
            name: 'end_description',
            variant: 'text',
        },
        {
            label: 'Completed Button Text',
            name: 'end_button_text',
            variant: 'string',
        },
    ];
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields }));
};
exports.default = AdminFormEdit;
