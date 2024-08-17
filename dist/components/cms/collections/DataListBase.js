"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var DataListBase = function (props) {
    var url = props.url, name = props.name, query = props.query, header = props.header, list = props.list, show = props.show, edit = props.edit, destroy = props.destroy;
    return (react_1.default.createElement(frontend_js_1.ResourceProvider, { name: name, url: url },
        react_1.default.createElement(__1.DataFetcher, { query: query },
            header && header,
            list && list,
            show && show,
            edit && edit,
            destroy && destroy)));
};
exports.default = DataListBase;
