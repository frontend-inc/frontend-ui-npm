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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
var core_1 = require("../../core");
var lucide_react_1 = require("lucide-react");
function Notifications(_a) {
    var notifications = _a.notifications;
    var _b = (0, react_1.useState)(0), activeStep = _b[0], setActiveStep = _b[1];
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    var handlePrev = function () {
        setActiveStep(function (prevStep) { return (prevStep - 1 + notifications.length) % notifications.length; });
    };
    var handleNext = function () {
        setActiveStep(function (prevStep) { return (prevStep + 1) % notifications.length; });
    };
    if (!(notifications === null || notifications === void 0 ? void 0 : notifications.length))
        return null;
    return (react_1.default.createElement("div", { className: "bg-primary w-full relative top-0 left-0 p-0 h-11 px-[48px]" },
        react_1.default.createElement(react_swipeable_views_1.default, { axis: 'x', index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true, containerStyle: {
                transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
            }, className: "w-full h-full" }, notifications.map(function (notification, i) { return (react_1.default.createElement(components_1.Notification, { key: i, notification: notification })); })),
        (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 1 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "absolute top-0 left-[8px] bottom-0 flex items-center" },
                react_1.default.createElement(core_1.IconButton, { onClick: handlePrev, className: "px-1 py-2" },
                    react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "h-5 w-5 text-primary-foreground" }),
                    react_1.default.createElement("span", { className: "sr-only" }, "Previous notification"))),
            react_1.default.createElement("div", { className: "absolute top-0 right-[8px] bottom-0 flex items-center" },
                react_1.default.createElement(core_1.IconButton, { onClick: handleNext, className: "px-1 py-2" },
                    react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-5 w-5 text-primary-foreground" }),
                    react_1.default.createElement("span", { className: "sr-only" }, "Next notification")))))));
}
exports.default = Notifications;
