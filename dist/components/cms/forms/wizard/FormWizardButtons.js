"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var FormWizardButtons = function (props) {
    var buttonText = props.buttonText, currentStep = props.currentStep, totalSteps = props.totalSteps, handleNextStep = props.handleNextStep, handlePrevStep = props.handlePrevStep, handleSubmit = props.handleSubmit;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.buttons },
        react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handlePrevStep, disabled: currentStep == 0, startIcon: react_1.default.createElement(components_1.Icon, { name: "ChevronLeft", color: "secondary.contrastText", size: 20 }) }, "Prev"),
        currentStep != totalSteps ? (react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", onClick: handleNextStep, disabled: currentStep == totalSteps, endIcon: react_1.default.createElement(components_1.Icon, { name: "ChevronRight", color: "primary.contrastText", size: 20 }) }, "Next")) : (react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", onClick: handleSubmit, disabled: currentStep != totalSteps }, buttonText))));
};
exports.default = FormWizardButtons;
var sx = {
    buttons: {
        width: '100%',
        justifyContent: 'flex-end',
        py: 4,
    },
};
