"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FormFieldInput_1 = __importDefault(require("./FormFieldInput"));
var lodash_1 = require("lodash");
var components_1 = require("../../../components");
var Form = function (props) {
    var errors = props.errors, loading = props.loading, fields = props.fields, resource = props.resource, handleChange = props.handleChange, handleRemove = props.handleRemove, handleSubmit = props.handleSubmit, _a = props.buttonText, buttonText = _a === void 0 ? 'Submit' : _a;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root }, fields === null || fields === void 0 ? void 0 :
        fields.map(function (field, index) { return (react_1.default.createElement(FormFieldInput_1.default, { key: index, errors: errors, field: field, value: (0, lodash_1.get)(resource, field.name), handleChange: handleChange, handleRemove: handleRemove })); }),
        handleSubmit && (react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", onClick: handleSubmit, disabled: loading, endIcon: react_1.default.createElement(components_1.IconLoading, { color: "primary.contrastText", loading: loading }) }, buttonText))));
};
exports.default = Form;
var sx = {
    root: {
        width: '100%',
    },
    button: {
        mt: 2,
    },
};
