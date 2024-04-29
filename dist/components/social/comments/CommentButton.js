"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CommentButton = function (props) {
    var reply = props.reply, handleClick = props.handleClick;
    var handleToggleClick = function () {
        handleClick();
    };
    return (react_1.default.createElement(material_1.Button, { variant: 'contained', color: "secondary", onClick: handleToggleClick }, reply ? 'Reply' : 'Leave a comment'));
};
exports.default = CommentButton;
var sx = {
    icon: {
        fontSize: '28px',
    },
    selected: {
        color: 'primary.main',
    },
};
