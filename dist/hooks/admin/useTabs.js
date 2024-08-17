"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useTabs = function (tab) {
    var _a = (0, react_1.useContext)(context_1.AdminContext), activeTab = _a.activeTab, setActiveTab = _a.setActiveTab;
    (0, react_1.useEffect)(function () {
        if (tab) {
            setActiveTab(tab);
        }
    }, [tab]);
    return {
        activeTab: activeTab,
        setActiveTab: setActiveTab,
    };
};
exports.default = useTabs;
