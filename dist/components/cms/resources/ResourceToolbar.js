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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var ResourceToolbarButtons_1 = __importDefault(require("./toolbar/ResourceToolbarButtons"));
var ResourceToolbar = function (props) {
    var _a = props || {}, open = _a.open, selected = _a.selected, selectedIds = _a.selectedIds, handleClose = _a.handleClose, buttons = _a.buttons, _b = _a.component, Component = _b === void 0 ? ResourceToolbarButtons_1.default : _b, rest = __rest(_a, ["open", "selected", "selectedIds", "handleClose", "buttons", "component"]);
    return (react_1.default.createElement(__1.ResourceToolbarModal, { open: open, handleClose: handleClose },
        react_1.default.createElement(Component, __assign({ selected: selected, selectedIds: selectedIds, buttons: buttons }, rest))));
};
exports.default = ResourceToolbar;
