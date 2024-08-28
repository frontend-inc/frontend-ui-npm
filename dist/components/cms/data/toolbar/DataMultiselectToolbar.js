"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var DataMultiselectToolbar = function (props) {
    var _a = props || {}, _b = _a.buttons, buttons = _b === void 0 ? [] : _b, _c = _a.toolbarButtons, toolbarButtons = _c === void 0 ? [] : _c;
    return (react_1.default.createElement(__1.DataToolbarModal, null,
        react_1.default.createElement(__1.DataMultiselectAddToListButton, null),
        react_1.default.createElement(__1.DataMultiselectDeleteButton, null), toolbarButtons === null || toolbarButtons === void 0 ? void 0 :
        toolbarButtons.map(function (button, index) { return (react_1.default.createElement(__1.DataMultiselectUpdateButton, { key: index, icon: button === null || button === void 0 ? void 0 : button.icon, buttonText: button === null || button === void 0 ? void 0 : button.buttonText, fields: [
                {
                    label: button.label,
                    name: button.name,
                    variant: button.variant,
                },
            ] })); })));
};
exports.default = DataMultiselectToolbar;
