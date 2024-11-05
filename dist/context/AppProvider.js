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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var AppContext_1 = __importDefault(require("./AppContext"));
var AppProvider = function (props) {
    var _a = props || {}, name = _a.name, description = _a.description, logo = _a.logo, apiUrl = _a.apiUrl, clientUrl = _a.clientUrl, enableShopify = _a.enableShopify, enableStripe = _a.enableStripe, enableSubscription = _a.enableSubscription, children = _a.children;
    var _b = (0, react_1.useState)(), alert = _b[0], setAlert = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(false), loaded = _d[0], setLoaded = _d[1];
    var _e = (0, react_1.useState)(false), authOpen = _e[0], setAuthOpen = _e[1]; // Auth modal
    var _f = (0, react_1.useState)(false), myAccountOpen = _f[0], setMyAccountOpen = _f[1]; // My account modal
    var _g = (0, react_1.useState)(false), menuOpen = _g[0], setMenuOpen = _g[1]; // Mobile menu
    var _h = (0, react_1.useState)(), app = _h[0], setApp = _h[1];
    var value = {
        name: name,
        description: description,
        app: app,
        setApp: setApp,
        logo: logo,
        apiUrl: apiUrl,
        clientUrl: clientUrl,
        alert: alert,
        setAlert: setAlert,
        authOpen: authOpen,
        setAuthOpen: setAuthOpen,
        myAccountOpen: myAccountOpen,
        setMyAccountOpen: setMyAccountOpen,
        menuOpen: menuOpen,
        setMenuOpen: setMenuOpen,
        enableShopify: enableShopify,
        enableStripe: enableStripe,
        enableSubscription: enableSubscription,
        loading: loading,
        loaded: loaded,
        setLoaded: setLoaded,
        setLoading: setLoading,
    };
    return react_1.default.createElement(AppContext_1.default.Provider, { value: value }, children);
};
exports.default = AppProvider;
