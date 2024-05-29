"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../components");
var AuthRequired = function (props) {
    var children = props.children, _a = props.requireAuth, requireAuth = _a === void 0 ? false : _a, _b = props.requireTeam, requireTeam = _b === void 0 ? false : _b, _c = props.requirePaid, requirePaid = _c === void 0 ? false : _c, _d = props.requireAdmin, requireAdmin = _d === void 0 ? false : _d;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    if (requireAuth && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
        return (react_1.default.createElement(components_1.Placeholder, { title: "Sign In required", description: "You must be logged in.", actions: react_1.default.createElement(components_1.SignInButton, null) }));
    }
    if (requireTeam && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id)) {
        return (react_1.default.createElement(components_1.Placeholder, { title: "Team required", description: "You must be a member of a team.", actions: react_1.default.createElement(components_1.SignInButton, null) }));
    }
    if (requirePaid && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.paid)) {
        return (react_1.default.createElement(components_1.Placeholder, { title: "You must be a subscriber", description: "You must become a paid subscriber to continue.", actions: react_1.default.createElement(components_1.SignInButton, null) }));
    }
    if (requireAdmin && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) != 'admin') {
        return (react_1.default.createElement(components_1.Placeholder, { title: "You must be an admin", description: "You must an admin to continue.", actions: react_1.default.createElement(components_1.SignInButton, null) }));
    }
    return children;
};
exports.default = AuthRequired;
