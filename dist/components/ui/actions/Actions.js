"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ActionButton_1 = __importDefault(require("./ActionButton"));
var ActionMenuItem_1 = __importDefault(require("./ActionMenuItem"));
var components_1 = require("../../../components");
var Actions = function (props) {
    var _a, _b;
    var actions = props.actions, resource = props.resource;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: "row", spacing: 1 },
        react_1.default.createElement(material_1.Stack, { sx: sx.buttons, direction: 'row', spacing: 1 }, (_a = actions === null || actions === void 0 ? void 0 : actions.slice(0, 2)) === null || _a === void 0 ? void 0 : _a.map(function (action, index) { return (react_1.default.createElement(ActionButton_1.default, { key: index, color: index == 0 ? 'primary' : 'secondary', action: action, resource: resource })); })),
        (actions === null || actions === void 0 ? void 0 : actions.length) > 2 && (react_1.default.createElement(components_1.MenuButton, null, (_b = actions === null || actions === void 0 ? void 0 : actions.slice(2, actions.length)) === null || _b === void 0 ? void 0 : _b.map(function (action, index) { return (react_1.default.createElement(ActionMenuItem_1.default, { key: index, action: action, resource: resource })); })))));
};
exports.default = Actions;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'center',
    },
    buttons: {
        width: '100%',
        justifyContent: 'center',
    },
};
