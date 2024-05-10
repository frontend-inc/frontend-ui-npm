"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var TeamAvatar = function (props) {
    var _a, _b;
    var team = props.team, _c = props.size, size = _c === void 0 ? 36 : _c;
    return (react_1.default.createElement(material_1.Avatar, { src: (_a = team === null || team === void 0 ? void 0 : team.image) === null || _a === void 0 ? void 0 : _a.url, sx: __assign(__assign({}, sx.root), { height: size, width: size, bgcolor: ((_b = team === null || team === void 0 ? void 0 : team.image) === null || _b === void 0 ? void 0 : _b.url) ? 'common.white' : team === null || team === void 0 ? void 0 : team.color }) }, (team === null || team === void 0 ? void 0 : team.name) ? (react_1.default.createElement(material_1.Typography, { variant: "button", color: "background.default", sx: sx.label }, (0, helpers_1.getInitials)(team === null || team === void 0 ? void 0 : team.name))) : (react_1.default.createElement(__1.Icon, { name: "User", color: "secondary.contrastText" }))));
};
exports.default = TeamAvatar;
var sx = {
    root: {
        display: 'flex',
        pt: '2px',
        bgcolor: 'secondary.main',
    },
    label: {
        textTransform: 'uppercase'
    }
};
