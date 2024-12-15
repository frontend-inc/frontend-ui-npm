'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
function Notifications(_a) {
    var notifications = _a.notifications;
    if (!(notifications === null || notifications === void 0 ? void 0 : notifications.length))
        return null;
    return (react_1.default.createElement("div", { className: "bg-primary w-full relative top-0 left-0 p-0 pb-[30px] h-11 px-[48px]" },
        react_1.default.createElement(frontend_shadcn_1.Carousel, null,
            react_1.default.createElement(frontend_shadcn_1.CarouselContent, null, notifications.map(function (notification, i) { return (react_1.default.createElement(frontend_shadcn_1.CarouselItem, { key: i },
                react_1.default.createElement(components_1.Notification, { notification: notification }))); })),
            (notifications === null || notifications === void 0 ? void 0 : notifications.length) > 1 && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(frontend_shadcn_1.CarouselPrevious, { className: "h-8 w-8 ml-2 border-0 bg-primary hover:bg-black/10 text-primary-foreground hover:text-primary-foreground" }),
                react_1.default.createElement(frontend_shadcn_1.CarouselNext, { className: "h-8 w-8 mr-2 border-0 bg-primary hover:bg-black/10 text-primary-foreground hover:text-primary-foreground" }))))));
}
exports.default = Notifications;
