"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var FollowButton = function (props) {
    var following = props.following, loading = props.loading, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: following ? 'outlined' : 'contained', color: "primary", disabled: loading, startIcon: !following && react_1.default.createElement(__1.Icon, { name: "Plus", size: 24 }) }, following ? 'Following' : 'Follow'));
};
exports.default = FollowButton;
