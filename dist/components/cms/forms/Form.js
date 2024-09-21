"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FormFields_1 = __importDefault(require("./FormFields"));
var __1 = require("../..");
var Form = function (props) {
    var errors = props.errors, loading = props.loading, fields = props.fields, resource = props.resource, handleChange = props.handleChange, handleRemove = props.handleRemove, handleSubmit = props.handleSubmit, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, _a = props.buttonText, buttonText = _a === void 0 ? 'Submit' : _a, inputOptions = props.inputOptions, inputParams = props.inputParams;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(FormFields_1.default, { errors: errors, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, inputOptions: inputOptions, inputParams: inputParams }),
        handleSubmit && (react_1.default.createElement(material_1.Button, { size: "medium", variant: "contained", onClick: handleSubmit, disabled: loading, endIcon: loading ? (react_1.default.createElement(__1.IconLoading, { color: "primary.contrastText", loading: loading })) : null }, buttonText))));
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
