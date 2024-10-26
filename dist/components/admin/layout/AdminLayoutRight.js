'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var AdminLayoutRight = function (props) {
    var children = props.children, title = props.title;
    var _a = (0, hooks_1.useAdmin)(), openLayoutRight = _a.openLayoutRight, setOpenLayoutRight = _a.setOpenLayoutRight;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Hidden, { smDown: true }, openLayoutRight && (react_1.default.createElement("div", { className: "border-l border-border w-[300px] min-w-[300px] h-screen" }, children))),
        react_1.default.createElement(core_1.Hidden, { smUp: true },
            react_1.default.createElement(components_1.Sheet, { disablePadding: true, title: title, open: openLayoutRight, handleClose: function () { return setOpenLayoutRight(false); } }, children))));
};
exports.default = AdminLayoutRight;
