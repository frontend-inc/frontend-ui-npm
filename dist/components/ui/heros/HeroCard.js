'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var HeroCard = function (props) {
    var _a = props || {}, label = _a.label, image = _a.image, title = _a.title, subtitle = _a.subtitle, description = _a.description, actions = _a.actions, secondaryAction = _a.secondaryAction, enableOverlay = _a.enableOverlay, enableGradient = _a.enableGradient;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 overflow-hidden" },
        react_1.default.createElement("div", { className: "w-full flex justify-center items-center" },
            react_1.default.createElement("div", { className: "w-full flex flex-col md:flex-row gap-4 space-y-4 md:space-y-0 md:space-x-4 justify-start items-center md:items-start" },
                react_1.default.createElement("div", { className: "w-full md:w-1/2 flex flex-col gap-2" },
                    react_1.default.createElement(__1.Image, { src: image, alt: title, label: label, height: 512, fullWidth: true, enableGradient: enableGradient, enableOverlay: enableOverlay }),
                    actions),
                react_1.default.createElement("div", { className: "w-full md:w-1/2 max-w-full md:max-w-[500px] flex flex-col space-y-4" },
                    react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: "left", size: "lg" }),
                    react_1.default.createElement(components_1.Typography, { variant: "body1" }, description),
                    secondaryAction)))));
};
exports.default = HeroCard;
