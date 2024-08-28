"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var CollectionToolbarModal = function (props) {
    var _a = props || {}, enableDelete = _a.enableDelete, enableAddToList = _a.enableAddToList, _b = _a.toolbarButtons, toolbarButtons = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(components_1.DataToolbarModal, null,
        enableAddToList && (react_1.default.createElement(components_1.DataMultiselectAddToListButton, { query: {
                current_user: true,
            } })),
        enableDelete && react_1.default.createElement(components_1.DataMultiselectDeleteButton, null), toolbarButtons === null || toolbarButtons === void 0 ? void 0 :
        toolbarButtons.map(function (button, index) { return (react_1.default.createElement(components_1.DataMultiselectUpdateButton, { key: index, icon: button === null || button === void 0 ? void 0 : button.icon, buttonText: button === null || button === void 0 ? void 0 : button.buttonText, fields: [
                {
                    label: button.label,
                    name: button.name,
                    variant: button.variant,
                },
            ] })); })));
};
exports.default = CollectionToolbarModal;
