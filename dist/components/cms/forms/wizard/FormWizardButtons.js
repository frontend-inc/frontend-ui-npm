"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var FormWizardButtons = function (props) {
    var loading = props.loading, buttonText = props.buttonText, currentStep = props.currentStep, totalSteps = props.totalSteps, handleNextStep = props.handleNextStep, handlePrevStep = props.handlePrevStep, handleSubmit = props.handleSubmit;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.buttons },
        react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", color: "secondary", sx: sx.prevButton, onClick: handlePrevStep, startIcon: react_1.default.createElement(components_1.Icon, { name: "ChevronLeft", color: "secondary.contrastText" }) }, "Prev"),
        currentStep != totalSteps ? (react_1.default.createElement(material_1.Button, { sx: sx.button, size: "large", variant: "contained", onClick: handleNextStep, disabled: currentStep == totalSteps, endIcon: loading ? (react_1.default.createElement(components_1.IconLoading, null)) : (react_1.default.createElement(components_1.Icon, { name: "ChevronRight", color: "primary.contrastText" })) }, "Next")) : (react_1.default.createElement(material_1.Button, { sx: sx.button, size: "large", variant: "contained", onClick: handleSubmit, disabled: currentStep != totalSteps, endIcon: loading && react_1.default.createElement(components_1.IconLoading, null) }, buttonText))));
};
exports.default = FormWizardButtons;
var sx = {
    buttons: {
        width: '100%',
        justifyContent: 'center',
        py: 2,
        px: 2,
        position: 'fixed',
        bottom: 0,
        left: 0,
        borderTop: '2px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
    },
    button: {
        width: {
            sm: '260px',
            xs: '100%',
        },
    },
    prevButton: {
        width: {
            sm: '260px',
            xs: '100%',
        },
        color: 'secondary.contrastText',
    },
};
