"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var TeamUserForm = function (props) {
    var _a = props || {}, errors = _a.errors, teamUser = _a.teamUser, handleChange = _a.handleChange;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1.5 },
        react_1.default.createElement(material_1.List, { dense: true, disablePadding: true },
            react_1.default.createElement(components_1.UserListItem, { selected: true, user: teamUser === null || teamUser === void 0 ? void 0 : teamUser.user })),
        react_1.default.createElement(components_1.Autosuggest, { errors: errors, name: "role", label: "Select role", value: teamUser === null || teamUser === void 0 ? void 0 : teamUser.role, placeholder: "Select role", options: constants_1.USER_ROLES, handleChange: handleChange })));
};
exports.default = TeamUserForm;
