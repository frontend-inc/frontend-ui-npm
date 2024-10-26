'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useApp = function () {
    var _a = (0, react_1.useContext)(context_1.AppContext), app = _a.app, setApp = _a.setApp, logo = _a.logo, apiUrl = _a.apiUrl, clientUrl = _a.clientUrl, enableShopify = _a.enableShopify, enableStripe = _a.enableStripe, alert = _a.alert, setAlert = _a.setAlert, authOpen = _a.authOpen, setAuthOpen = _a.setAuthOpen, myAccountOpen = _a.myAccountOpen, setMyAccountOpen = _a.setMyAccountOpen, menuOpen = _a.menuOpen, setMenuOpen = _a.setMenuOpen, loading = _a.loading, loaded = _a.loaded, setLoaded = _a.setLoaded, setLoading = _a.setLoading;
    return {
        app: app,
        setApp: setApp,
        logo: logo,
        apiUrl: apiUrl,
        clientUrl: clientUrl,
        enableShopify: enableShopify,
        enableStripe: enableStripe,
        alert: alert,
        setAlert: setAlert,
        authOpen: authOpen,
        setAuthOpen: setAuthOpen,
        menuOpen: menuOpen,
        setMenuOpen: setMenuOpen,
        myAccountOpen: myAccountOpen,
        setMyAccountOpen: setMyAccountOpen,
        loading: loading,
        loaded: loaded,
        setLoaded: setLoaded,
        setLoading: setLoading,
    };
};
exports.default = useApp;
