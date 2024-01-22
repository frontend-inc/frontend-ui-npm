"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
var useResponsive = function () {
    var theme = (0, styles_1.useTheme)();
    var _a = (0, react_1.useState)("lg"), breakpoint = _a[0], setBreakpoint = _a[1];
    var isMobile = (0, useMediaQuery_1.default)(theme.breakpoints.down("sm"));
    var isTablet = (0, useMediaQuery_1.default)(theme.breakpoints.between("sm", "md"));
    var isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.between("md", "lg"));
    var isSuperLargeDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("lg"));
    (0, react_1.useEffect)(function () {
        if (isMobile)
            setBreakpoint("sm");
        if (isTablet)
            setBreakpoint("md");
        if (isDesktop)
            setBreakpoint("lg");
        if (isSuperLargeDesktop)
            setBreakpoint("xl");
    }, [isMobile, isTablet, isDesktop, isSuperLargeDesktop]);
    return {
        breakpoint: breakpoint,
        isMobile: isMobile,
        isTablet: isTablet,
        isDesktop: isDesktop,
        isSuperLargeDesktop: isSuperLargeDesktop,
    };
};
exports.default = useResponsive;
