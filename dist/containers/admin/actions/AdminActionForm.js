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
var constants_1 = require("../../../constants");
var hooks_1 = require("../../../hooks");
var AdminActionForm = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var FORM_FIELDS = [
        {
            label: 'Label',
            name: 'label',
            variant: 'string',
        },
        {
            label: 'API name',
            name: 'name',
            variant: 'nospace',
        },
        {
            label: 'Trigger',
            name: 'action_type',
            variant: 'select',
            options: constants_1.ACTION_TYPES,
        },
        {
            label: 'Collection',
            name: 'collection_id',
            variant: 'autosuggest',
            displayField: 'name',
            url: "".concat(apiUrl, "/collections"),
            query: {},
            conditions: [
                {
                    name: 'action_type',
                    operator: 'in',
                    value: ['resources.create', 'resources.save', 'resources.delete'],
                },
            ],
        },
    ];
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: FORM_FIELDS }));
};
exports.default = AdminActionForm;
