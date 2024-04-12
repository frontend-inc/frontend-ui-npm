"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var FormWizardProgress = function (props) {
    var currentStep = props.currentStep, totalSteps = props.totalSteps;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.LinearProgress, { sx: sx.linearProgress, variant: "determinate", value: (currentStep / totalSteps) * 100 }),
        react_1.default.createElement(material_1.Box, { sx: sx.label },
            react_1.default.createElement(components_1.Label, { label: "Step ".concat(currentStep, " of ").concat(totalSteps) }))));
};
exports.default = FormWizardProgress;
var sx = {
    linearProgress: {
        width: '100%',
        height: '10px',
    },
    label: {
        m: 2,
    },
};
