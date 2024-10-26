'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_2 = require("../../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var UnplashCard = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var image = _a.image, selected = _a.selected, handleClick = _a.handleClick;
    var handleProfileClick = function (user) {
        var _a;
        var url = ((_a = user === null || user === void 0 ? void 0 : user.links) === null || _a === void 0 ? void 0 : _a.html) + '?utm_source=frontend.co&utm_medium=referral';
        window.open(url, '_blank');
    };
    return (react_1.default.createElement(frontend_shadcn_2.Card, { className: (0, frontend_shadcn_3.cn)('rounded bg-background border border-border p-0', selected && 'border-primary') },
        react_1.default.createElement("div", { className: "cursor-pointer", onClick: function () { return handleClick && handleClick(image); } },
            react_1.default.createElement(components_1.Image, { height: 120, width: 180, src: (_b = image === null || image === void 0 ? void 0 : image.urls) === null || _b === void 0 ? void 0 : _b.small, alt: image === null || image === void 0 ? void 0 : image.alt_description, objectFit: "cover", disableBorderRadius: true })),
        react_1.default.createElement(frontend_shadcn_2.CardHeader, { className: "p-1" },
            react_1.default.createElement(components_2.Button, { variant: "ghost", className: "text-xs text-muted-foreground hover:text-foreground flex items-center space-x-2 p-0", onClick: function () { return handleProfileClick(image === null || image === void 0 ? void 0 : image.user); } },
                react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "h-6 w-6" },
                    react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: (_d = (_c = image === null || image === void 0 ? void 0 : image.user) === null || _c === void 0 ? void 0 : _c.profile_image) === null || _d === void 0 ? void 0 : _d.medium, alt: (_e = image === null || image === void 0 ? void 0 : image.user) === null || _e === void 0 ? void 0 : _e.name }),
                    react_1.default.createElement(frontend_shadcn_1.AvatarFallback, null, (_g = (_f = image === null || image === void 0 ? void 0 : image.user) === null || _f === void 0 ? void 0 : _f.name) === null || _g === void 0 ? void 0 : _g.charAt(0))),
                react_1.default.createElement("span", { className: "break-words" }, (_h = image === null || image === void 0 ? void 0 : image.user) === null || _h === void 0 ? void 0 : _h.name)))));
};
exports.default = UnplashCard;
