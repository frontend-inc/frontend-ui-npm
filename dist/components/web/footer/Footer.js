'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var AppStoreButton_1 = __importDefault(require("./AppStoreButton"));
var GooglePlayButton_1 = __importDefault(require("./GooglePlayButton"));
var components_3 = require("../../../components");
var FooterLink = function (props) {
    var _a = props || {}, link = _a.link, handleClick = _a.handleClick;
    return (react_1.default.createElement("button", { onClick: handleClick, className: "w-full justify-start items-start flex flex-col hover:bg-content2 focus:focus-ring focus:ring-2 focus:ring-ring rounded-md p-2" },
        react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-foreground" }, link.label),
        react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-foreground/70" }, link.description)));
};
function Footer(props) {
    var _a = props || {}, iOSUrl = _a.iOSUrl, androidUrl = _a.androidUrl, _b = _a.enableNewsletter, enableNewsletter = _b === void 0 ? false : _b, logo = _a.logo, _c = _a.links, links = _c === void 0 ? [] : _c, _d = _a.socialLinks, socialLinks = _d === void 0 ? [] : _d, handleClick = _a.handleClick;
    return (react_1.default.createElement("footer", { className: "w-full py-10 px-4" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-between items-center pb-6" },
            react_1.default.createElement(components_3.NavLogo, { src: logo, handleClick: function () { return handleClick('/'); } }),
            enableNewsletter && (react_1.default.createElement("div", { className: "w-[260px]" },
                react_1.default.createElement(components_3.EmailSubscribe, { size: "md" })))),
        react_1.default.createElement("div", { className: "w-full gap-6 py-6 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]" }, links.map(function (topLevelLink) {
            var _a;
            var hasChildren = ((_a = topLevelLink === null || topLevelLink === void 0 ? void 0 : topLevelLink.children) === null || _a === void 0 ? void 0 : _a.length) > 0 ||
                topLevelLink.link_type == 'dropdown';
            return (react_1.default.createElement("div", { key: topLevelLink.id, className: "min-w-[150px] flex-1" }, hasChildren ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Typography, { variant: "caption", className: "ml-2 text-foreground/70" }, topLevelLink.label),
                react_1.default.createElement("ul", { className: "flex flex-col space-y-2 py-2" }, topLevelLink === null || topLevelLink === void 0 ? void 0 : topLevelLink.children.map(function (child) { return (react_1.default.createElement("li", { key: child.id },
                    react_1.default.createElement(FooterLink, { link: child, handleClick: function () {
                            return handleClick((child === null || child === void 0 ? void 0 : child.url) || (child === null || child === void 0 ? void 0 : child.path));
                        } }))); })))) : (react_1.default.createElement("div", { className: "w-full mt-6", key: topLevelLink === null || topLevelLink === void 0 ? void 0 : topLevelLink.id },
                react_1.default.createElement(FooterLink, { link: topLevelLink, handleClick: function () {
                        return handleClick((topLevelLink === null || topLevelLink === void 0 ? void 0 : topLevelLink.url) || (topLevelLink === null || topLevelLink === void 0 ? void 0 : topLevelLink.path));
                    } })))));
        })),
        ((socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.length) > 0 || iOSUrl || androidUrl) && (react_1.default.createElement("div", { className: "flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center justify-between border-t border-divider py-4" },
            (socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.length) > 0 && (react_1.default.createElement("div", { className: "flex flex-row space-x-1" }, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.map(function (socialLink, index) { return (react_1.default.createElement("div", { key: index },
                react_1.default.createElement(components_2.SocialButton, { key: index, url: socialLink.url, provider: socialLink.provider }))); }))),
            react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                iOSUrl && react_1.default.createElement(AppStoreButton_1.default, { url: iOSUrl }),
                androidUrl && react_1.default.createElement(GooglePlayButton_1.default, { url: androidUrl }))))));
}
exports.default = Footer;
