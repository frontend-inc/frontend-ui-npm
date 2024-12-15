'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var Footer = function (props) {
    var _a;
    var handleClick = props.handleClick, _b = props.links, links = _b === void 0 ? [] : _b, _c = props.socialLinks, socialLinks = _c === void 0 ? [] : _c, _d = props.policies, policies = _d === void 0 ? [] : _d;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 py-2 w-full bg-background min-h-[80px]" },
        react_1.default.createElement("div", { className: "flex flex-row space-x-10 w-full items-center justify-between border-b border-divider" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-4 p-6 w-full items-start" },
                react_1.default.createElement("div", { className: "w-full flex justify-start sm:justify-center sm:pl-3" },
                    react_1.default.createElement("div", { className: "flex flex-wrap flex-col sm:flex-row gap-4 sm:pl-3" }, links === null || links === void 0 ? void 0 : links.map(function (menuLink, i) { return (react_1.default.createElement(components_1.Button, { className: "text-foreground", variant: "ghost", key: i, onClick: function () { return handleClick(menuLink === null || menuLink === void 0 ? void 0 : menuLink.path); } }, menuLink === null || menuLink === void 0 ? void 0 : menuLink.label)); }))),
                react_1.default.createElement("div", { className: "w-[100px]" }))),
        react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full py-1 px-3 items-center justify-between" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-3" }, (_a = socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.position) - (b === null || b === void 0 ? void 0 : b.position); })) === null || _a === void 0 ? void 0 : _a.map(function (link, i) { return (react_1.default.createElement(__1.SocialLink, { key: i, provider: link === null || link === void 0 ? void 0 : link.provider, url: link === null || link === void 0 ? void 0 : link.url, color: "common.black" })); })),
            react_1.default.createElement("div", { className: "flex flex-row space-x-3 w-full items-center" }, policies === null || policies === void 0 ? void 0 : policies.map(function (policy, i) { return (react_1.default.createElement(__1.PolicyLink, { key: i, label: policy === null || policy === void 0 ? void 0 : policy.label, handle: policy === null || policy === void 0 ? void 0 : policy.handle })); })))));
};
exports.default = Footer;
