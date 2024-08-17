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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var AdminContext_1 = __importDefault(require("./AdminContext"));
var AdminProvider = function (props) {
    var children = props.children, apiUrl = props.apiUrl, clientUrl = props.clientUrl;
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)(false), openMenu = _b[0], setOpenMenu = _b[1];
    var _c = (0, react_1.useState)(true), openLayoutLeft = _c[0], setOpenLayoutLeft = _c[1];
    var _d = (0, react_1.useState)(true), openLayoutRight = _d[0], setOpenLayoutRight = _d[1];
    var _e = (0, react_1.useState)(false), activeTab = _e[0], setActiveTab = _e[1];
    var _f = (0, react_1.useState)(0), leftTab = _f[0], setLeftTab = _f[1];
    var _g = (0, react_1.useState)(0), rightTab = _g[0], setRightTab = _g[1];
    var toggleLayoutLeft = function () { return setOpenLayoutLeft(!openLayoutLeft); };
    var toggleLayoutRight = function () { return setOpenLayoutRight(!openLayoutRight); };
    var value = {
        loading: loading,
        setLoading: setLoading,
        apiUrl: apiUrl,
        clientUrl: clientUrl,
        activeTab: activeTab,
        setActiveTab: setActiveTab,
        leftTab: leftTab,
        setLeftTab: setLeftTab,
        rightTab: rightTab,
        setRightTab: setRightTab,
        openMenu: openMenu,
        setOpenMenu: setOpenMenu,
        openLayoutLeft: openLayoutLeft,
        setOpenLayoutLeft: setOpenLayoutLeft,
        toggleLayoutLeft: toggleLayoutLeft,
        openLayoutRight: openLayoutRight,
        setOpenLayoutRight: setOpenLayoutRight,
        toggleLayoutRight: toggleLayoutRight,
    };
    return (react_1.default.createElement(AdminContext_1.default.Provider, { value: value }, children));
};
exports.default = AdminProvider;
