'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var lodash_1 = require("lodash");
var SocialField = function (props) {
    var _a = props || {}, field = _a.field, resource = _a.resource;
    var _b = field || {}, provider = _b.provider, name = _b.name;
    var url = (0, lodash_1.get)(resource, name);
    return react_1.default.createElement(__1.SocialLink, { provider: provider, url: url });
};
exports.default = SocialField;
