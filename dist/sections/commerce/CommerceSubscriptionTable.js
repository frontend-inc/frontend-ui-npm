"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../components");
var components_2 = require("../../components");
var CommerceSubscriptionTable = function (props) {
    var label = props.label, title = props.title, description = props.description, _a = props.textAlign, textAlign = _a === void 0 ? 'center' : _a, mode = props.mode, py = props.py, px = props.px, maxWidth = props.maxWidth, requireAuth = props.requireAuth, requireTeam = props.requireTeam, requirePaid = props.requirePaid, rest = __rest(props, ["label", "title", "description", "textAlign", "mode", "py", "px", "maxWidth", "requireAuth", "requireTeam", "requirePaid"]);
    return (react_1.default.createElement(components_1.Section, { mode: mode, py: py, px: px, maxWidth: maxWidth, requireAuth: requireAuth, requireTeam: requireTeam, requirePaid: requirePaid },
        react_1.default.createElement(material_1.Stack, { spacing: 3 },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, description: description, textAlign: textAlign }),
            react_1.default.createElement(components_2.SubscriptionTable, null))));
};
exports.default = CommerceSubscriptionTable;
