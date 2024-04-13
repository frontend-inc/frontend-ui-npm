"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MultipleChoiceInput_1 = __importDefault(require("../inputs/MultipleChoiceInput"));
var SingleChoiceInput_1 = __importDefault(require("../inputs/SingleChoiceInput"));
var FormInput = function (props) {
    var variant = props.variant, name = props.name, label = props.label, errors = props.errors, value = props.value, options = props.options, placeholder = props.placeholder, handleChange = props.handleChange;
    var componentMapper = {
        "single_choice": SingleChoiceInput_1.default,
        "multiple_choice": MultipleChoiceInput_1.default
    };
    var InputComponent = componentMapper[variant];
    return (react_1.default.createElement(InputComponent, { errors: errors, label: label, name: name, value: value, options: options, handleChange: handleChange, placeholder: placeholder }));
};
exports.default = FormInput;
