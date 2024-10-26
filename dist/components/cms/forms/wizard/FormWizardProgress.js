'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
function FormWizardProgress(_a) {
    var currentStep = _a.currentStep, totalSteps = _a.totalSteps;
    var progressValue = (currentStep / totalSteps) * 100;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(frontend_shadcn_1.Progress, { value: progressValue, className: "w-full h-2.5 rounded-none" }),
        react_1.default.createElement("div", { className: "m-4" },
            react_1.default.createElement(frontend_shadcn_2.Badge, { variant: "outline", className: "text-sm font-medium py-1 px-2" },
                "Step ",
                currentStep,
                " of ",
                totalSteps))));
}
exports.default = FormWizardProgress;
