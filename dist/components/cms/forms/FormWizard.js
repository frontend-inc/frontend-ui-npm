"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var FormWizardProgress_1 = __importDefault(require("./wizard/FormWizardProgress"));
var FormWizardField_1 = __importDefault(require("./wizard/FormWizardField"));
var FormWizardButtons_1 = __importDefault(require("./wizard/FormWizardButtons"));
var FormWizard = function (props) {
    var resource = props.resource, setResource = props.setResource, _a = props.fields, fields = _a === void 0 ? [] : _a, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleRemove = props.handleRemove, _b = props.buttonText, buttonText = _b === void 0 ? 'Submit' : _b, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment;
    var _c = (0, react_1.useState)(), currentField = _c[0], setCurrentField = _c[1];
    var _d = (0, react_1.useState)(0), currentStep = _d[0], setCurrentStep = _d[1];
    var _e = (0, react_1.useState)(0), totalSteps = _e[0], setTotalSteps = _e[1];
    var _f = (0, react_1.useState)(false), fadeIn = _f[0], setFadeIn = _f[1];
    var handleNextStep = function () {
        setFadeIn(false);
        var nextStep = currentStep + 1;
        if (nextStep > totalSteps) {
            return;
        }
        setTimeout(function () {
            setCurrentStep(nextStep);
            setFadeIn(true);
        }, 500);
    };
    var handlePrevStep = function () {
        var nextStep = currentStep - 1;
        if (nextStep < 0) {
            return;
        }
        setCurrentStep(nextStep);
    };
    (0, react_1.useEffect)(function () {
        if (fields) {
            setTotalSteps(fields.length);
        }
    }, [fields]);
    (0, react_1.useEffect)(function () {
        if (fields) {
            setCurrentField(fields[currentStep]);
        }
    }, [fields, currentStep]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(FormWizardProgress_1.default, { currentStep: currentStep, totalSteps: totalSteps }),
        react_1.default.createElement(material_1.Box, { sx: sx.formContainer },
            react_1.default.createElement(material_1.Box, { sx: sx.form },
                currentField && (react_1.default.createElement(FormWizardField_1.default, { fadeIn: fadeIn, field: currentField, handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, resource: resource, setResource: setResource })),
                react_1.default.createElement(FormWizardButtons_1.default, { currentStep: currentStep, totalSteps: totalSteps, handleNextStep: handleNextStep, handlePrevStep: handlePrevStep, handleSubmit: handleSubmit, buttonText: buttonText })))));
};
exports.default = FormWizard;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 200px)',
    },
    form: {
        px: 2,
        py: 4,
        width: '100%',
        maxWidth: '600px',
    },
};
