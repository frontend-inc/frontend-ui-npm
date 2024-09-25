"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var AdminQuestionDetails = function (props) {
    var _a;
    var _b = props || {}, question = _b.question, handleEdit = _b.handleEdit;
    return (react_1.default.createElement(material_1.Paper, { sx: sx.paper },
        react_1.default.createElement(material_1.Stack, { direction: "row", sx: sx.root, spacing: 1 },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2 },
                react_1.default.createElement(material_1.Box, { sx: sx.image },
                    react_1.default.createElement(components_1.Image, { src: (_a = question === null || question === void 0 ? void 0 : question.image) === null || _a === void 0 ? void 0 : _a.url, alt: question === null || question === void 0 ? void 0 : question.title, width: 96, height: 96 })),
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
                    react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, question === null || question === void 0 ? void 0 : question.title),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, question === null || question === void 0 ? void 0 : question.description))),
            react_1.default.createElement(material_1.Stack, null,
                react_1.default.createElement(components_1.PrimaryButton, { onClick: handleEdit }, "Edit")))));
};
exports.default = AdminQuestionDetails;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'space-between',
    },
    image: {
        width: 96,
        height: 96,
    },
    paper: {
        p: 2,
    },
};
