'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var CommentReplyButton = function (props) {
    var reply = props.reply, handleClick = props.handleClick;
    return (react_1.default.createElement(components_1.Button, { variant: "secondary", onClick: handleClick, className: "bg-secondary text-secondary-foreground hover:bg-secondary/90" }, reply ? 'Reply' : 'Leave a Comment'));
};
exports.default = CommentReplyButton;
