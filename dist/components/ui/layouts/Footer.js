"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var LayoutFooter = function (props) {
    var name = props.name, privacyUrl = props.privacyUrl, termsUrl = props.termsUrl;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 1, direction: "column" },
        react_1.default.createElement(material_1.Stack, { direction: "row", divider: react_1.default.createElement(material_1.Divider, { orientation: "vertical", flexItem: true }), spacing: 1 },
            react_1.default.createElement(material_1.Link, { sx: sx.link, href: termsUrl, variant: "body2", color: "text.secondary" },
                "About ",
                name),
            react_1.default.createElement(material_1.Link, { sx: sx.link, href: termsUrl, variant: "body2", color: "text.secondary" }, "Terms of service"),
            react_1.default.createElement(material_1.Link, { sx: sx.link, href: privacyUrl, variant: "body2", color: "text.secondary" }, "Privacy policy"))));
};
exports.default = LayoutFooter;
var sx = {
    root: {
        height: "90px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
    },
    link: {
        cursor: "pointer",
    },
};
