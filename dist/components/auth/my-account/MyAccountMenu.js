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
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var MyAccountMenu = function (props) {
    var _a = props || {}, enableTeams = _a.enableTeams, handleChange = _a.handleChange;
    var TABS = [{ label: 'My Account', value: 0 }];
    var TEAM_TABS = [
        { label: 'Teams', value: 1 },
        { label: 'Members', value: 2 },
    ];
    var tabs = TABS;
    if (enableTeams) {
        tabs = __spreadArray(__spreadArray([], tabs, true), TEAM_TABS, true);
    }
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Box, { sx: sx.avatar },
            react_1.default.createElement(components_1.UserAvatar, { user: currentUser, size: 96 })),
        react_1.default.createElement(material_1.List, { sx: sx.root }, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab, index) { return (react_1.default.createElement(material_1.ListItem, { key: index, sx: sx.listItem, secondaryAction: react_1.default.createElement(material_1.IconButton, null,
                react_1.default.createElement(components_1.Icon, { name: "ChevronRight", color: "text.primary", size: 24 })) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function (ev) { return handleChange(ev, tab === null || tab === void 0 ? void 0 : tab.value); } },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { sx: sx.menuItem, variant: "body1", color: "text.primary" }, tab === null || tab === void 0 ? void 0 : tab.label) })))); }))));
};
exports.default = MyAccountMenu;
var sx = {
    root: {
        p: 0,
    },
    listItem: {
        p: 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    menuItem: {
        pl: 2,
    },
    listItemButton: {
        py: 1,
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
    },
};
