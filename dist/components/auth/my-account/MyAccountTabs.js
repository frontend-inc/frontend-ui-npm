"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var MyAccountTabs = function (props) {
    var _a = props || {}, tab = _a.tab, enableTeams = _a.enableTeams, enableStripe = _a.enableStripe, handleChange = _a.handleChange;
    var TABS = [{ label: 'Account', value: 0 }];
    var TEAM_TABS = [
        { label: 'Teams', value: 1 },
        { label: 'Members', value: 2 },
    ];
    var STRIPE_TABS = [
        { label: 'Payment', value: 4 },
        { label: 'Subscription', value: 6 },
    ];
    var tabs = TABS;
    if (enableTeams) {
        tabs = __spreadArray(__spreadArray([], tabs, true), TEAM_TABS, true);
    }
    if (enableStripe) {
        tabs = __spreadArray(__spreadArray([], tabs, true), STRIPE_TABS, true);
    }
    if (!enableTeams && !enableStripe)
        return null;
    return (react_1.default.createElement(material_1.Tabs, { value: tab, onChange: handleChange, color: "secondary", sx: sx.root, variant: "fullWidth" }, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab, index) { return (react_1.default.createElement(material_1.Tab, { disableRipple: true, key: index, sx: sx.tab, label: tab.label, value: tab.value })); })));
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
