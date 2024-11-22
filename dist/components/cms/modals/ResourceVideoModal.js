'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var ResourceVideoModal = function (props) {
    var _a, _b;
    var _c = props || {}, open = _c.open, handleClose = _c.handleClose, resource = _c.resource;
    if (!((_a = resource === null || resource === void 0 ? void 0 : resource.video) === null || _a === void 0 ? void 0 : _a.url))
        return null;
    return (react_1.default.createElement(__1.VideoModal, { open: open, handleClose: handleClose, src: (_b = resource === null || resource === void 0 ? void 0 : resource.video) === null || _b === void 0 ? void 0 : _b.url }));
};
exports.default = ResourceVideoModal;
