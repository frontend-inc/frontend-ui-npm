"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var AdminFormDetails = function (props) {
    var _a;
    var router = (0, router_1.useRouter)();
    var appId = (router.query || {}).app_id;
    var _b = props || {}, form = _b.form, handleEdit = _b.handleEdit;
    var handleResponses = function () {
        router.push("/dashboard/".concat(appId, "/users/forms/").concat(form.handle, "/responses"));
    };
    return (react_1.default.createElement(material_1.Paper, { sx: sx.paper },
        react_1.default.createElement(material_1.Stack, { direction: "row", sx: sx.root, spacing: 1 },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2 },
                react_1.default.createElement(material_1.Box, { sx: sx.image },
                    react_1.default.createElement(components_1.Image, { src: (_a = form === null || form === void 0 ? void 0 : form.image) === null || _a === void 0 ? void 0 : _a.url, alt: form === null || form === void 0 ? void 0 : form.title, width: 96, height: 96 })),
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
                    react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, form === null || form === void 0 ? void 0 : form.title),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, form === null || form === void 0 ? void 0 : form.description))),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                react_1.default.createElement(components_1.SecondaryButton, { onClick: handleEdit }, "Edit"),
                react_1.default.createElement(components_1.PrimaryButton, { onClick: handleResponses }, "View Responses")))));
};
exports.default = AdminFormDetails;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'space-between',
    },
    image: {
        width: 96,
        height: 96,
    },
    paper: {
        p: 2,
    },
};
