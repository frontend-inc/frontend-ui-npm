'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var core_1 = require("../../../components/core");
var AdminAnswerDetails = function (props) {
    var _a;
    var _b = props || {}, question = _b.question, handleEdit = _b.handleEdit;
    return (react_1.default.createElement("div", { className: "bg-background shadow-md rounded-md p-4" },
        react_1.default.createElement("div", { className: "flex flex-row w-full justify-between items-start space-x-2" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-4" },
                react_1.default.createElement("div", { className: "w-24 h-24" },
                    react_1.default.createElement(components_1.Image, { src: (_a = question === null || question === void 0 ? void 0 : question.image) === null || _a === void 0 ? void 0 : _a.url, alt: question === null || question === void 0 ? void 0 : question.title, width: 96, height: 96 })),
                react_1.default.createElement("div", { className: "flex flex-col" },
                    react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, question === null || question === void 0 ? void 0 : question.title),
                    react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, question === null || question === void 0 ? void 0 : question.description))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(components_1.PrimaryButton, { onClick: handleEdit }, "Edit")))));
};
exports.default = AdminAnswerDetails;
