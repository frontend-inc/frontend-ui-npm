'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../../core");
var frontend_js_1 = require("frontend-js");
var react_2 = require("@remixicon/react");
var ToolbarModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), _b = _a.selected, selected = _b === void 0 ? [] : _b, handleClear = _a.handleClear;
    var children = (props || {}).children;
    var open = selected.length > 0;
    var handleClose = function () {
        handleClear();
    };
    return (react_1.default.createElement(core_1.Collapse, { in: open },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex flex-row justify-between items-center w-full" },
                react_1.default.createElement("div", { className: "flex flex-row space-x-1 items-center" },
                    react_1.default.createElement(core_1.IconButton, { onClick: handleClose },
                        react_1.default.createElement(react_2.RiCloseFill, null)),
                    children)))));
};
exports.default = ToolbarModal;
