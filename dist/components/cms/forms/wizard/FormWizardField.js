"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormInput_1 = __importDefault(require("../FormInput"));
var FormWizardInputWrapper_1 = __importDefault(require("./FormWizardInputWrapper"));
var FormWizardInput_1 = __importDefault(require("./FormWizardInput"));
var lodash_1 = require("lodash");
var WIZARD_FIELD_VARIENTS = [
    'multiple_choice',
    'single_choice',
];
var FormWizardField = function (props) {
    var field = props.field, fadeIn = props.fadeIn, resource = props.resource, handleChange = props.handleChange, handleRemove = props.handleRemove;
    return (react_1.default.createElement(FormWizardInputWrapper_1.default, { fadeIn: fadeIn, title: field.title, description: field.description }, field && (react_1.default.createElement(react_1.default.Fragment, null, WIZARD_FIELD_VARIENTS.includes(field.variant) ? (react_1.default.createElement(FormWizardInput_1.default, { name: field.name, label: field.label, placeholder: field.placeholder, variant: field.variant, options: field.options, answers: field.answers, value: (0, lodash_1.get)(resource, field.name), handleChange: handleChange })) : (react_1.default.createElement(FormInput_1.default, { name: field.name, label: field.label, placeholder: field.placeholder, variant: field.variant, options: field.options, value: (0, lodash_1.get)(resource, field.name), handleChange: handleChange, handleRemove: handleRemove }))))));
};
exports.default = FormWizardField;
var sx = {
    title: {
        textAlign: 'left',
        width: '100%',
    },
    description: {
        textAlign: 'left',
        width: '100%',
    },
};
