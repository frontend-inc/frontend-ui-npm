'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Notification(_a) {
    var notification = _a.notification;
    var text = (notification || {}).text;
    return (react_1.default.createElement("li", { className: "cursor-pointer p-0 h-[44px] w-full flex justify-center items-center bg-primary overflow-x-auto scrollbar-hide" },
        react_1.default.createElement("span", { className: "text-sm whitespace-nowrap flex flex-row items-center justify-center text-center overflow-x-auto scrollbar-hide text-primary-foreground" }, text)));
}
exports.default = Notification;
