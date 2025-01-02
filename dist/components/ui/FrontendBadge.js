"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var FrontendBadge = function () {
    return (react_1.default.createElement("div", { className: "absolute bottom-0 right-0 w-full flex flex-row justify-end pb-4 pr-4" },
        react_1.default.createElement(link_1.default, { href: "https://www.frontend.co", target: "_blank", className: "relative p-[2px] rounded-full hover:scale-105 transition-transform cursor-pointer overflow-hidden" },
            react_1.default.createElement("div", { className: "inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500" },
                react_1.default.createElement("div", { className: "px-3 py-1 rounded-full bg-background" },
                    react_1.default.createElement("span", { className: "text-sm font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 text-transparent bg-clip-text" }, "Built with Frontend"))))));
};
exports.default = FrontendBadge;
