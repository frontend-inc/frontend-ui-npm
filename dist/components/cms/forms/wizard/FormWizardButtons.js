'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var react_2 = require("@remixicon/react");
function FormWizardButtons(_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, buttonText = _a.buttonText, currentStep = _a.currentStep, totalSteps = _a.totalSteps, handleNextStep = _a.handleNextStep, handlePrevStep = _a.handlePrevStep, handleSubmit = _a.handleSubmit;
    return (react_1.default.createElement("div", { className: "fixed bottom-0 left-0 w-full py-2 px-2 flex justify-center space-x-4" },
        react_1.default.createElement(components_1.Button, { size: "lg", variant: "outline", onClick: handlePrevStep, className: 'w-full sm:w-[260px] bg-background', startIcon: react_1.default.createElement(react_2.RiArrowLeftLine, { className: "h-4 w-4" }) }, "Prev"),
        currentStep !== totalSteps ? (react_1.default.createElement(components_1.Button, { size: "lg", onClick: handleNextStep, disabled: currentStep === totalSteps, className: "w-full sm:w-[260px]", loading: loading, endIcon: react_1.default.createElement(react_2.RiArrowRightLine, { className: "h-4 w-4" }) }, "Next")) : (react_1.default.createElement(components_1.Button, { size: "lg", onClick: handleSubmit, disabled: currentStep !== totalSteps, className: "w-full sm:w-[260px]", loading: loading }, buttonText))));
}
exports.default = FormWizardButtons;
