'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var Profile = function (props) {
    var _a = props || {}, direction = _a.direction, label = _a.label, title = _a.title, subtitle = _a.subtitle, image = _a.image, description = _a.description, _b = _a.socialLinks, socialLinks = _b === void 0 ? [] : _b, _c = _a.fontSize, fontSize = _c === void 0 ? 'xl' : _c, editable = _a.editable, handleChange = _a.handleChange;
    return (react_1.default.createElement(__1.Container, { maxWidth: "lg" },
        react_1.default.createElement(__1.Stack, { direction: direction },
            react_1.default.createElement(__1.Stack, { direction: direction, size: "1/4" },
                react_1.default.createElement(__1.Stack, { className: direction == 'row' ? 'items-start' : 'items-center' },
                    react_1.default.createElement("div", { className: "h-[160px] w-[160px]" },
                        react_1.default.createElement(__1.AvatarImage
                        //@ts-ignore
                        , { 
                            //@ts-ignore
                            alt: title, src: image, size: 160 })),
                    react_1.default.createElement("div", { className: "flex flex-row" }, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.map(function (link, index) { return (react_1.default.createElement("div", { className: "p-[2px]", key: index },
                        react_1.default.createElement(__1.SocialLink, { url: link.url, size: 28, provider: link.provider }))); })))),
            react_1.default.createElement(__1.Stack, { direction: direction, size: "3/4" },
                react_1.default.createElement(__1.Stack, { spacing: 4 },
                    react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, size: fontSize, textAlign: direction == 'row' ? 'left' : 'center', editable: editable, handleChange: handleChange }),
                    react_1.default.createElement(__1.Typography, { variant: "subtitle2", className: "text-muted-foreground italic leading-loose" }, description))))));
};
exports.default = Profile;
