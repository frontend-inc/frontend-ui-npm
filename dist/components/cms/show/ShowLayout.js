'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var core_1 = require("../../core");
var ShowLayout = function (props) {
    var _a = props || {}, resource = _a.resource, children = _a.children, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, _b = _a.buttons, buttons = _b === void 0 ? [] : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c;
    var _d = resource || {}, title = _d.title, description = _d.description;
    return (react_1.default.createElement("div", { className: "flex flex-col items-center justify-start w-full space-y-8" },
        buttons && (react_1.default.createElement("div", { className: "w-full sm:w-auto flex justify-center" },
            react_1.default.createElement(__1.ButtonActions, { buttons: buttons, justifyContent: "center" }))),
        react_1.default.createElement("div", { className: "flex flex-col items-center space-y-6 max-w-[500px] w-full text-center" },
            react_1.default.createElement(core_1.Typography, { variant: "h4" }, title),
            (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }))),
        react_1.default.createElement("div", { className: "w-full rounded" }, children),
        react_1.default.createElement(__1.SocialButtons, { resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
        react_1.default.createElement("div", { className: "w-full max-w-[500px] sm:max-w-full" },
            react_1.default.createElement(__1.ExpandableText, { text: description }))));
};
exports.default = ShowLayout;
