'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var ToolbarToolbar = function (props) {
    var _a = (props || {}).buttons, buttons = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(__1.ToolbarModal, null,
        react_1.default.createElement(__1.ToolbarAddToListButton, null),
        react_1.default.createElement(__1.ToolbarDeleteButton, null), buttons === null || buttons === void 0 ? void 0 :
        buttons.map(function (button, index) { return (react_1.default.createElement(__1.ToolbarUpdateButton, { key: index, icon: button === null || button === void 0 ? void 0 : button.icon, buttonText: button === null || button === void 0 ? void 0 : button.buttonText, fields: [
                {
                    label: button.label,
                    name: button.name,
                    variant: button.variant,
                },
            ] })); })));
};
exports.default = ToolbarToolbar;
