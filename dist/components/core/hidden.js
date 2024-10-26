'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hidden = void 0;
var react_1 = __importDefault(require("react"));
var react_responsive_1 = require("react-responsive");
var Hidden = function (_a) {
    var children = _a.children, smDown = _a.smDown, smUp = _a.smUp, mdDown = _a.mdDown, mdUp = _a.mdUp;
    var isSmallScreen = (0, react_responsive_1.useMediaQuery)({ maxWidth: 639 });
    var isMediumScreen = (0, react_responsive_1.useMediaQuery)({ minWidth: 640, maxWidth: 767 });
    var isLargeScreen = (0, react_responsive_1.useMediaQuery)({ minWidth: 768 });
    var shouldHide = function () {
        if (smDown && (isSmallScreen || isMediumScreen))
            return true;
        if (smUp && (isMediumScreen || isLargeScreen))
            return true;
        if (mdDown && (isSmallScreen || isMediumScreen))
            return true;
        if (mdUp && isLargeScreen)
            return true;
        return false;
    };
    if (shouldHide()) {
        return null;
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.Hidden = Hidden;
