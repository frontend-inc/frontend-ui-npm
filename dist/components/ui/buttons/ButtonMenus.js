"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonMenu_1 = __importDefault(require("./ButtonMenu"));
var __1 = require("../..");
var ButtonActions = function (props) {
    var _a = props.buttons, buttons = _a === void 0 ? [] : _a;
    if (!buttons || (buttons === null || buttons === void 0 ? void 0 : buttons.length) === 0)
        return null;
    return (react_1.default.createElement(__1.MenuButton, null, buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) {
        return (react_1.default.createElement(ButtonMenu_1.default, { key: index, path: button === null || button === void 0 ? void 0 : button.path, url: button === null || button === void 0 ? void 0 : button.url, label: button === null || button === void 0 ? void 0 : button.label, icon: button === null || button === void 0 ? void 0 : button.icon, onClick: button === null || button === void 0 ? void 0 : button.onClick }));
    })));
};
exports.default = ButtonActions;
