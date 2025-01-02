'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var CommentReplyButton = function (props) {
    var reply = props.reply, handleClick = props.handleClick;
    return (react_1.default.createElement(react_2.Button, { variant: "ghost", onPress: handleClick }, reply ? 'Reply' : 'Leave a Comment'));
};
exports.default = CommentReplyButton;
