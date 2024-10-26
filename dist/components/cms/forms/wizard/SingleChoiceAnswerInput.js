'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MultipleChoiceAnswerInput_1 = __importDefault(require("./MultipleChoiceAnswerInput"));
var SingleChoiceInput = function (props) {
    var label = props.label, _a = props.direction, direction = _a === void 0 ? 'column' : _a, name = props.name, value = props.value, answers = props.answers, handleChange = props.handleChange;
    return (react_1.default.createElement(MultipleChoiceAnswerInput_1.default, { multiSelect: false, direction: direction, name: name, label: label, value: value, handleChange: handleChange, answers: answers }));
};
exports.default = SingleChoiceInput;
