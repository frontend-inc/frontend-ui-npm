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
var components_1 = require("../../../components");
var PublishedLabel = function (props) {
    var _a = props.published, published = _a === void 0 ? false : _a;
    return (react_1.default.createElement(components_1.Label, { label: published ? 'Published' : 'Draft', styles: __assign(__assign({}, sx.draft), (published && sx.published)) }));
};
exports.default = PublishedLabel;
var sx = {
    draft: {
        color: 'primary.contrastText',
        bgcolor: 'primary.main',
    },
    published: {
        color: 'success.contrastText',
        bgcolor: 'success.main',
    },
};
