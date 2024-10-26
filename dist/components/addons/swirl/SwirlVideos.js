'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var swirl_short_videos_typescript_1 = require("swirl-short-videos-typescript");
var SwirlVideos = function (props) {
    var dataCode = props.dataCode, dataPlaylistCode = props.dataPlaylistCode, _a = props.serverType, serverType = _a === void 0 ? 'prod' : _a;
    return (react_1.default.createElement("div", { className: "min-h-[100px] w-full" },
        react_1.default.createElement(swirl_short_videos_typescript_1.SwirlShortVideos, { dataCode: dataCode, dataPlalistCode: dataPlaylistCode, serverType: serverType })));
};
exports.default = SwirlVideos;
