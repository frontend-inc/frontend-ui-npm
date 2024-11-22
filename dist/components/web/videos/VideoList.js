'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var helpers_1 = require("../../../helpers");
var lucide_react_1 = require("lucide-react");
var Videos = function (props) {
    var _a = props || {}, items = _a.items, _b = _a.orientation, orientation = _b === void 0 ? 'vertical' : _b, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    var height = orientation === 'vertical' ? 360 : 200;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)(), activeVideo = _d[0], setActiveVideo = _d[1];
    var handleClick = function (video) {
        setActiveVideo(video);
        setOpen(true);
    };
    return (react_1.default.createElement("div", { className: "w-full justify-center flex flow-row p-2" },
        react_1.default.createElement("div", { className: "container mx-auto max-w-screen-2xl" },
            react_1.default.createElement("div", { className: 'w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6' }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(__2.BlurFade, { delay: 0.25 + idx * 0.05, key: idx },
                react_1.default.createElement("div", { className: "relative group" },
                    react_1.default.createElement(__1.Image, { src: (0, helpers_1.cloudinaryImageFromVideoUrl)(item === null || item === void 0 ? void 0 : item.video), handleClick: function () { return handleClick(item); }, enableGradient: enableGradient, enableOverlay: enableOverlay, height: height }),
                    react_1.default.createElement("div", { className: "absolute bottom-4 left-4 flex flex-row space-x-2 items-center w-full" },
                        react_1.default.createElement(lucide_react_1.PlayCircle, { size: 24, className: "text-white/60 group-hover:text-white" }),
                        react_1.default.createElement("div", { className: "text-white/60 text-sm font-semibold group-hover:text-white" }, item === null || item === void 0 ? void 0 : item.title))))); })),
            (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-video-fill", title: "No videos", description: "Videos will display here." }))),
        react_1.default.createElement(__1.VideoModal, { open: open, handleClose: function () { return setOpen(false); }, 
            //@ts-ignore
            src: activeVideo === null || activeVideo === void 0 ? void 0 : activeVideo.video })));
};
exports.default = Videos;
