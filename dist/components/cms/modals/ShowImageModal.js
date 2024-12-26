'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ShowImageModal = function (props) {
    var _a, _b;
    var _c = (0, frontend_js_1.useResourceContext)(), openShow = _c.openShow, setOpenShow = _c.setOpenShow, resource = _c.resource;
    var enableGradient = (props || {}).enableGradient;
    if (!((_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url))
        return null;
    return (react_1.default.createElement(__1.ImageModal, { open: openShow, handleClose: function () { return setOpenShow(false); }, src: (_b = resource === null || resource === void 0 ? void 0 : resource.image) === null || _b === void 0 ? void 0 : _b.url, title: resource === null || resource === void 0 ? void 0 : resource.title, enableGradient: enableGradient }));
};
exports.default = ShowImageModal;
