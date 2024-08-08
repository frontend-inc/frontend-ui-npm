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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var CurrentUser = function (props) {
    var _a = props || {}, enableEdit = _a.enableEdit, _b = _a.fields, fields = _b === void 0 ? [] : _b, _c = _a.buttons, buttons = _c === void 0 ? [] : _c;
    var _d = (0, frontend_js_1.useAuth)(), user = _d.user, setUser = _d.setUser, currentUser = _d.currentUser, fetchMe = _d.fetchMe;
    var _e = (0, react_1.useState)(false), open = _e[0], setOpen = _e[1];
    var handleEdit = function () {
        setOpen(true);
    };
    (0, react_1.useEffect)(function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
            fetchMe();
        }
    }, [currentUser]);
    (0, react_1.useEffect)(function () {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);
    var userActions = (0, helpers_1.buildActions)({
        enableEdit: enableEdit,
        handleEdit: handleEdit,
        buttons: buttons,
    });
    return (react_1.default.createElement(components_1.AuthGuard, null,
        react_1.default.createElement(components_1.UserProfile, __assign({}, props, { user: currentUser, buttons: userActions })),
        react_1.default.createElement(components_1.CurrentUserEditModal, { open: open, handleClose: function () { return setOpen(false); }, fields: fields })));
};
exports.default = CurrentUser;
