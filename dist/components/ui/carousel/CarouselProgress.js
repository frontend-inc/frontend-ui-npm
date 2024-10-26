'use client';
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
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_2 = require("frontend-shadcn");
var CarouselProgress = function (_a) {
    var children = _a.children, className = _a.className;
    var _b = (0, react_1.useState)(0), currentStep = _b[0], setCurrentStep = _b[1];
    var handleNextStep = function () {
        var nextStep = currentStep + 1;
        if (nextStep > children.length - 1) {
            nextStep = 0;
        }
        setCurrentStep(nextStep);
    };
    var handlePrevStep = function () {
        var nextStep = currentStep - 1;
        if (nextStep < 0) {
            nextStep = children.length - 1;
        }
        setCurrentStep(nextStep);
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('space-y-4', className) },
        react_1.default.createElement("div", null, children[currentStep]),
        react_1.default.createElement("div", { className: "flex flex-col items-center space-y-2" },
            react_1.default.createElement(frontend_shadcn_1.Progress, { value: ((currentStep + 1) / children.length) * 100, className: "w-full" }),
            react_1.default.createElement("div", { className: "flex justify-center items-center space-x-4" },
                react_1.default.createElement(components_1.Button, { variant: "outline", size: "icon", onClick: handlePrevStep },
                    react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4" })),
                react_1.default.createElement(components_1.Button, { variant: "outline", size: "icon", onClick: handleNextStep },
                    react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" }))))));
};
exports.default = CarouselProgress;
