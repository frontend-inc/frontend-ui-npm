'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MultipleChoiceAnswerInput_1 = __importDefault(require("./MultipleChoiceAnswerInput"));
var SingleChoiceAnswerInput_1 = __importDefault(require("./SingleChoiceAnswerInput"));
var FormInput = function (props) {
    var variant = props.variant, name = props.name, label = props.label, errors = props.errors, value = props.value, options = props.options, _a = props.answers, answers = _a === void 0 ? [] : _a, placeholder = props.placeholder, handleChange = props.handleChange;
    var componentMapper = {
        single_choice: SingleChoiceAnswerInput_1.default,
        multiple_choice: MultipleChoiceAnswerInput_1.default,
    };
    var InputComponent = componentMapper[variant];
    return (react_1.default.createElement(InputComponent, { errors: errors, label: label, name: name, value: value, options: options, answers: answers, handleChange: handleChange, placeholder: placeholder }));
};
exports.default = FormInput;
