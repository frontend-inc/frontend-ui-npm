"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ShowVideoModal = function (props) {
    var _a;
    var _b = (0, frontend_js_1.useResourceContext)(), openShow = _b.openShow, setOpenShow = _b.setOpenShow, resource = _b.resource, url = _b.url;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.MediaModal, { open: openShow, handleClose: function () { return setOpenShow(false); } },
        react_1.default.createElement("video", { src: (_a = resource === null || resource === void 0 ? void 0 : resource.video) === null || _a === void 0 ? void 0 : _a.url, controls: true, height: 600, width: "100%" })));
};
exports.default = ShowVideoModal;
