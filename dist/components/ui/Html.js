"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_react_parser_1 = __importDefault(require("html-react-parser"));
var Html = function (props) {
    var html = (props || {}).html;
    return (0, html_react_parser_1.default)(html);
};
exports.default = Html;
