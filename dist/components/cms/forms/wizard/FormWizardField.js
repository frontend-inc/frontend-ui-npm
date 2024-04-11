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
var material_1 = require("@mui/material");
var FormField_1 = __importDefault(require("../FormField"));
var index_1 = require("../../../../constants/index");
var lodash_1 = require("lodash");
var FormWizardField = function (props) {
    var field = props.field, resource = props.resource, setResource = props.setResource, handleChange = props.handleChange, handleRemove = props.handleRemove;
    var handleDataChange = function (ev) {
        var name = ev.target.name;
        var value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
        setResource(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), { data: __assign(__assign({}, prev.data), (_a = {}, _a[name] = value, _a)) }));
        });
    };
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 3 },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
            react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: "h4", color: "text.primary" }, field === null || field === void 0 ? void 0 : field.title),
            react_1.default.createElement(material_1.Typography, { sx: sx.description, variant: "body1", color: "text.secondary" }, field === null || field === void 0 ? void 0 : field.description)),
        field && (react_1.default.createElement(react_1.default.Fragment, null, index_1.SYSTEM_FIELDS.includes(field.name) ? (react_1.default.createElement(FormField_1.default, { field: field, value: (0, lodash_1.get)(resource, field.name), handleChange: handleChange, handleRemove: handleRemove })) : (react_1.default.createElement(FormField_1.default, { field: field, value: (0, lodash_1.get)(resource === null || resource === void 0 ? void 0 : resource.data, field.name), handleChange: handleDataChange }))))));
};
exports.default = FormWizardField;
var sx = {
    title: {
        textAlign: 'center',
        width: '100%'
    },
    description: {
        textAlign: 'center',
        width: '100%'
    },
};
