"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var TeamUserForm = function (props) {
    var _a = props || {}, errors = _a.errors, user = _a.user, handleChange = _a.handleChange;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1.5 },
        react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "username", label: "Username", value: user === null || user === void 0 ? void 0 : user.username, placeholder: "Username", handleChange: handleChange }),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "first_name", label: "First name", value: user === null || user === void 0 ? void 0 : user.first_name, placeholder: "First name", handleChange: handleChange }),
            react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "last_name", label: "Last name", value: user === null || user === void 0 ? void 0 : user.last_name, placeholder: "Last name", handleChange: handleChange })),
        react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "email", label: "Email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Email", handleChange: handleChange })));
};
exports.default = TeamUserForm;
