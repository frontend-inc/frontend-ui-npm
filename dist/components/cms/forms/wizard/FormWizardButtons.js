'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var react_3 = require("@remixicon/react");
function FormWizardButtons(props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, buttonText = props.buttonText, currentStep = props.currentStep, totalSteps = props.totalSteps, handleNextStep = props.handleNextStep, handlePrevStep = props.handlePrevStep, handleSubmit = props.handleSubmit;
    return (react_1.default.createElement("div", { className: "fixed bottom-0 left-0 w-full py-2 px-2 flex justify-center space-x-4" },
        react_1.default.createElement(react_2.Button, { size: "lg", variant: "ghost", onPress: handlePrevStep, className: 'w-full sm:w-[260px] bg-background', startContent: react_1.default.createElement(react_3.RiArrowLeftLine, { className: "h-4 w-4" }) }, "Prev"),
        currentStep !== totalSteps ? (react_1.default.createElement(react_2.Button, { size: "lg", variant: "solid", color: "primary", onPress: handleNextStep, disabled: currentStep === totalSteps, className: "w-full sm:w-[260px]", isLoading: loading, endContent: react_1.default.createElement(react_3.RiArrowRightLine, { className: "h-4 w-4" }) }, "Next")) : (react_1.default.createElement(react_2.Button, { size: "lg", onPress: handleSubmit, variant: "solid", color: "primary", disabled: currentStep !== totalSteps, className: "w-full sm:w-[260px]", isLoading: loading }, buttonText))));
}
exports.default = FormWizardButtons;
