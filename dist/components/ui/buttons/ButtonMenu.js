"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var ButtonMenu = function (props) {
    var onClick = props.onClick, url = props.url, path = props.path, label = props.label;
    var router = (0, router_1.useRouter)();
    var handleClick = function () {
        if (url) {
            window.open(url, '_blank');
        }
        else {
            router.push(path);
        }
    };
    return react_1.default.createElement(material_1.MenuItem, { onClick: onClick ? onClick : handleClick }, label);
};
exports.default = ButtonMenu;
