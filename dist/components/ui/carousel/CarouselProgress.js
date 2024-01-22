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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var CarouselProgress = function (props) {
    var children = props.children;
    var _a = (0, react_1.useState)(0), currentStep = _a[0], setCurrentStep = _a[1];
    var handleNextStep = function () {
        var nextStep = currentStep + 1;
        if (nextStep > children.length - 1) {
            nextStep = 0;
        }
        setCurrentStep(nextStep);
    };
    var handlePrevStep = function () {
        var nextStep = currentStep - 1;
        if (nextStep == 0) {
            nextStep = children.length - 1;
        }
        setCurrentStep(nextStep);
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Box, null, children[currentStep]),
        react_1.default.createElement(material_1.Box, { sx: sx.controls },
            react_1.default.createElement(material_1.LinearProgress, { color: "primary", variant: "determinate", value: 80 }),
            react_1.default.createElement(material_1.Box, { sx: sx.actions },
                react_1.default.createElement(material_1.IconButton, { onClick: handlePrevStep },
                    react_1.default.createElement(icons_material_1.ChevronLeft, null)),
                react_1.default.createElement(material_1.IconButton, { onClick: handleNextStep },
                    react_1.default.createElement(icons_material_1.ChevronRight, null))))));
};
exports.default = CarouselProgress;
var sx = {
    actions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    },
    controls: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};
