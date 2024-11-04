"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMAGE_OR_VIDEO_FORMATS = exports.VIDEO_FORMATS = exports.IMAGE_FORMATS = exports.MAX_FILE_SIZE = void 0;
exports.MAX_FILE_SIZE = 10000000;
exports.IMAGE_FORMATS = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'bmp',
    'webp',
    'heic',
];
exports.VIDEO_FORMATS = [
    'mp4',
    'webm',
    'ogg',
    'mov',
    'm4v',
];
exports.IMAGE_OR_VIDEO_FORMATS = __spreadArray(__spreadArray([], exports.IMAGE_FORMATS, true), exports.VIDEO_FORMATS, true);
