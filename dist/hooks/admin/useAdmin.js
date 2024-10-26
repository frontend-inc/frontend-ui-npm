'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useAdmin = function () {
    var _a = (0, react_1.useContext)(context_1.AdminContext), apiUrl = _a.apiUrl, clientUrl = _a.clientUrl, loading = _a.loading, setLoading = _a.setLoading, leftTab = _a.leftTab, setLeftTab = _a.setLeftTab, rightTab = _a.rightTab, setRightTab = _a.setRightTab, openLayoutLeft = _a.openLayoutLeft, setOpenLayoutLeft = _a.setOpenLayoutLeft, openLayoutRight = _a.openLayoutRight, setOpenLayoutRight = _a.setOpenLayoutRight, toggleLayoutRight = _a.toggleLayoutRight;
    return {
        apiUrl: apiUrl,
        clientUrl: clientUrl,
        loading: loading,
        setLoading: setLoading,
        leftTab: leftTab,
        setLeftTab: setLeftTab,
        rightTab: rightTab,
        setRightTab: setRightTab,
        openLayoutLeft: openLayoutLeft,
        setOpenLayoutLeft: setOpenLayoutLeft,
        openLayoutRight: openLayoutRight,
        setOpenLayoutRight: setOpenLayoutRight,
        toggleLayoutRight: toggleLayoutRight,
    };
};
exports.default = useAdmin;
