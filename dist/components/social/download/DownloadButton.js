'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var helpers_1 = require("../../../helpers");
function DownloadButton(props) {
    var resource = props.resource, _a = props.size, size = _a === void 0 ? 'small' : _a, _b = props.variant, variant = _b === void 0 ? 'rounded' : _b;
    var _c = resource || {}, image = _c.image, file = _c.file, video = _c.video;
    var downloadUrl = (file === null || file === void 0 ? void 0 : file.url) || (video === null || video === void 0 ? void 0 : video.url) || (image === null || image === void 0 ? void 0 : image.url) || '#';
    var fileName = (file === null || file === void 0 ? void 0 : file.filename) || (video === null || video === void 0 ? void 0 : video.filename) || (image === null || image === void 0 ? void 0 : image.filename) || 'download';
    downloadUrl = (0, helpers_1.cloudinaryDownloadUrl)(downloadUrl, fileName);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("a", { href: downloadUrl, download: downloadUrl },
            react_1.default.createElement(__1.IconButton, { className: (0, frontend_shadcn_1.cn)(variant == 'circular' ? 'rounded-full' : 'rounded-lg', size === 'large' && 'border border-divider') },
                react_1.default.createElement(__1.RemixIcon, { name: "ri-download-line" })))));
}
exports.default = DownloadButton;
