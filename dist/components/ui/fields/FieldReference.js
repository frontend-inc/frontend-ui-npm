'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var FieldReference = function (props) {
    var value = props.value, label = props.label, handleClick = props.handleClick;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label },
        react_1.default.createElement(react_2.Button, { variant: "ghost", endContent: react_1.default.createElement(lucide_react_1.Repeat2, { className: "w-5 h-5" }), onPress: handleClick }, value)));
};
exports.default = FieldReference;
