"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var CollectionToolbar = function (props) {
    var _a = props || {}, enableDelete = _a.enableDelete, enableAddToList = _a.enableAddToList, _b = _a.toolbarButtons, toolbarButtons = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(__1.ToolbarModal, null,
        enableAddToList && (react_1.default.createElement(__1.ToolbarAddToListButton, { query: {
                current_user: true,
            } })),
        enableDelete && react_1.default.createElement(__1.ToolbarDeleteButton, null), toolbarButtons === null || toolbarButtons === void 0 ? void 0 :
        toolbarButtons.map(function (button, index) { return (react_1.default.createElement(__1.ToolbarUpdateButton, { key: index, icon: button === null || button === void 0 ? void 0 : button.icon, buttonText: button === null || button === void 0 ? void 0 : button.buttonText, fields: [
                {
                    label: button.label,
                    name: button.name,
                    variant: button.variant,
                },
            ] })); })));
};
exports.default = CollectionToolbar;
