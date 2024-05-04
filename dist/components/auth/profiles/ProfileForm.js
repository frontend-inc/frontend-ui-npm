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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var ProfileForm = function (props) {
    var resource = props.resource, buttonText = props.buttonText, fields = props.fields, rest = __rest(props, ["resource", "buttonText", "fields"]);
    return (react_1.default.createElement(components_1.AuthRequired, null,
        react_1.default.createElement(components_1.CollectionForm, __assign({}, rest, { url: "/api/v1/cms/profiles", fields: fields, buttonText: buttonText, handle: resource === null || resource === void 0 ? void 0 : resource.handle, onSuccessMessage: "Profile updated successfully!" }))));
};
exports.default = ProfileForm;
var sx = {
    root: {
        width: '100%',
    },
    button: {
        mt: 2,
    },
};
