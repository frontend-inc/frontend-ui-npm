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
var material_1 = require("@mui/material");
var ButtonAction_1 = __importDefault(require("./ButtonAction"));
var ButtonActions = function (props) {
    var buttons = props.buttons, size = props.size, justifyContent = props.justifyContent;
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), { justifyContent: justifyContent }), direction: "row", spacing: 0 }, (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.buttons), { justifyContent: justifyContent }), direction: { sm: 'row', xs: 'column' }, spacing: 1 }, buttons.map(function (button, index) {
        return (react_1.default.createElement(ButtonAction_1.default, { key: index, color: button === null || button === void 0 ? void 0 : button.color, icon: button === null || button === void 0 ? void 0 : button.icon, path: button === null || button === void 0 ? void 0 : button.path, url: button === null || button === void 0 ? void 0 : button.url, 
            //@ts-ignore
            size: size, variant: (button === null || button === void 0 ? void 0 : button.variant) || 'contained' }, button === null || button === void 0 ? void 0 : button.label));
    })))));
};
exports.default = ButtonActions;
var sx = {
    root: {
        justifyContent: 'space-between',
    },
    buttons: {
        width: '100%',
        justifyContent: 'flex-start',
    },
};
