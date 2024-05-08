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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../../hooks");
var hooks_2 = require("../../../hooks");
var TeamUserInviteForm_1 = __importDefault(require("./TeamUserInviteForm"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var TeamUserInvite = function (props) {
    var _a = props || {}, handleSuccess = _a.handleSuccess, handleCancel = _a.handleCancel;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var _b = (0, hooks_2.useTeams)(), loading = _b.loading, errors = _b.errors, user = _b.user, setUser = _b.setUser, inviteUser = _b.inviteUser;
    var handleChange = function (e) {
        var _a;
        setUser(__assign(__assign({}, user), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inviteUser(currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id, user)
                    //@ts-ignore
                ];
                case 1:
                    resp = _a.sent();
                    //@ts-ignore
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setUser({ username: '', first_name: '', last_name: '', email: '' });
                        showAlertSuccess('User invited successfully');
                        handleSuccess();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(material_1.Stack, { direction: 'column', spacing: 1.5 },
        react_1.default.createElement(TeamUserInviteForm_1.default, { errors: errors, user: user, handleChange: handleChange }),
        react_1.default.createElement(material_1.Stack, { sx: sx.actions, direction: 'row', spacing: 1 },
            react_1.default.createElement(material_1.Button, { color: "secondary", onClick: handleCancel, variant: "contained", startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Cancel"),
            react_1.default.createElement(material_1.Button, { color: "primary", onClick: handleSubmit, variant: "contained", startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Send Invite"))));
};
exports.default = TeamUserInvite;
var sx = {
    actions: {
        width: '100%',
        justifyContent: 'flex-end'
    }
};
