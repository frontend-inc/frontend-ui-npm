'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var UserEditModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, fields = _a.fields;
    return (react_1.default.createElement(__1.Sheet, { open: open, handleClose: handleClose, title: "Edit Profile" },
        react_1.default.createElement(__1.CurrentUserForm, { fields: fields, handleSuccess: handleClose })));
};
exports.default = UserEditModal;
