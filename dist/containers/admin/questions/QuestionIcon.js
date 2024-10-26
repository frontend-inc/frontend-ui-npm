'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var frontend_shadcn_1 = require("frontend-shadcn");
var QuestionIcon = function (_a) {
    var variant = _a.variant, _b = _a.size, size = _b === void 0 ? 40 : _b;
    var question = constants_1.QUESTION_VARIANTS.find(function (q) { return q.variant === variant; });
    if (!question)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(question.color, 'flex items-center justify-center rounded'), style: {
            minWidth: "".concat(size, "px"),
            minHeight: "".concat(size, "px"),
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
        } },
        react_1.default.createElement(components_1.Icon, { name: question.icon })));
};
exports.default = QuestionIcon;
