'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonAction_1 = __importDefault(require("./ButtonAction"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ButtonActions = function (_a) {
    var buttons = _a.buttons, size = _a.size, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'start' : _b;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-row', {
            'justify-start': justifyContent === 'start',
            'justify-center': justifyContent === 'center',
            'justify-end': justifyContent === 'end',
        }) }, (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-col sm:flex-row sm:space-x-3', {
            'justify-start': justifyContent === 'start',
            'justify-center': justifyContent === 'center',
            'justify-end': justifyContent === 'end',
        }) }, buttons.map(function (button, index) { return (react_1.default.createElement(ButtonAction_1.default, __assign({ key: index, size: size }, button), button === null || button === void 0 ? void 0 : button.label)); })))));
};
exports.default = ButtonActions;
