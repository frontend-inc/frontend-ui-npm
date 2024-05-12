"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FormInput_1 = __importDefault(require("../FormInput"));
var lodash_1 = require("lodash");
var FormWizardInput_1 = __importDefault(require("./FormWizardInput"));
var WIZARD_FIELD_VARIENTS = [
    'multiple_choice',
    'multiple_choice_images',
    'single_choice',
    'single_choice_image',
];
var FormWizardField = function (props) {
    var field = props.field, fadeIn = props.fadeIn, resource = props.resource, setResource = props.setResource, handleChange = props.handleChange, handleRemove = props.handleRemove;
    return (react_1.default.createElement(material_1.Fade, { in: fadeIn, timeout: 350 },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 3 },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: "h4", color: "text.primary" }, field === null || field === void 0 ? void 0 : field.title),
                react_1.default.createElement(material_1.Typography, { sx: sx.description, variant: "body1", color: "text.secondary" }, field === null || field === void 0 ? void 0 : field.description)),
            field && (react_1.default.createElement(react_1.default.Fragment, null, WIZARD_FIELD_VARIENTS.includes(field.variant) ? (react_1.default.createElement(FormWizardInput_1.default, { name: field.name, label: field.label, placeholder: field.placeholder, variant: field.variant, options: field.options, value: (0, lodash_1.get)(resource, field.name), handleChange: handleChange })) : (react_1.default.createElement(FormInput_1.default, { name: field.name, label: field.label, placeholder: field.placeholder, variant: field.variant, options: field.options, value: (0, lodash_1.get)(resource === null || resource === void 0 ? void 0 : resource.data, field.name), handleChange: handleChange, handleRemove: handleRemove })))))));
};
exports.default = FormWizardField;
var sx = {
    title: {
        textAlign: 'center',
        width: '100%',
    },
    description: {
        textAlign: 'center',
        width: '100%',
    },
};
