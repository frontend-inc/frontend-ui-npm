'use client';
"use strict";
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
var react_2 = require("@nextui-org/react");
var ResourceToolbar = function (props) {
    var _a = props || {}, open = _a.open, selected = _a.selected, selectedIds = _a.selectedIds, enableDelete = _a.enableDelete, enablePublish = _a.enablePublish, handleDelete = _a.handleDelete, handlePublish = _a.handlePublish, handleUnpublish = _a.handleUnpublish, handleClose = _a.handleClose, rest = __rest(_a, ["open", "selected", "selectedIds", "enableDelete", "enablePublish", "handleDelete", "handlePublish", "handleUnpublish", "handleClose"]);
    return (react_1.default.createElement(__1.ResourceToolbarModal, { open: open, handleClose: handleClose },
        react_1.default.createElement("div", { className: "flex flex-row justify-center items-center space-x-2" },
            enablePublish && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "solid", onPress: handlePublish }, "Publish"),
                react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "solid", onPress: handleUnpublish }, "Unpublish"))),
            enableDelete && (react_1.default.createElement(react_2.Button, { fullWidth: true, color: "danger", onPress: handleDelete }, "Delete")))));
};
exports.default = ResourceToolbar;
