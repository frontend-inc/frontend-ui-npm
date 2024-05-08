"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var MyAccountTabs = function (props) {
    var _a = props || {}, tab = _a.tab, handleChange = _a.handleChange;
    var TABS = [
        { label: 'Account', value: 0 },
        { label: 'Teams', value: 1 },
        { label: 'Members', value: 2 }
    ];
    return (react_1.default.createElement(material_1.Tabs, { value: tab, onChange: handleChange, color: "secondary", sx: sx.root, variant: "fullWidth" }, TABS.map(function (tab, index) { return (react_1.default.createElement(material_1.Tab, { disableRipple: true, key: index, sx: sx.tab, label: tab.label, value: tab.value })); })));
};
exports.default = MyAccountTabs;
var sx = {
    root: {
        my: 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
        width: '100%',
        '& .MuiTab-root': {
            minWidth: '60px',
            '&.Mui-selected': {
                color: 'text.primary',
            },
        },
    },
    tab: {},
};
