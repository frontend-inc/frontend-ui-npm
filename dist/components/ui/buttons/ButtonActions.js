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
var material_1 = require("@mui/material");
var ButtonAction_1 = __importDefault(require("./ButtonAction"));
var ButtonMenu_1 = __importDefault(require("./ButtonMenu"));
var __1 = require("../..");
var ButtonActions = function (props) {
    var _a, _b, _c;
    var color = props.color, buttons = props.buttons, resource = props.resource, user = props.user, _d = props.numVisible, numVisible = _d === void 0 ? 2 : _d, size = props.size, justifyContent = props.justifyContent;
    var buildButtonPath = function (button, resource, user) {
        var action = button.action_type, path = button.path;
        if (action == 'navigate_user') {
            action = 'navigate';
            path = "".concat(path, "/").concat(user === null || user === void 0 ? void 0 : user.username);
        }
        else if (action == 'navigate_cms') {
            action = 'navigate';
            path = "".concat(path, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle);
        }
        return { action: action, path: path };
    };
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), { justifyContent: justifyContent }), direction: "row", spacing: 0 },
        ((_a = buttons === null || buttons === void 0 ? void 0 : buttons.slice(0, numVisible)) === null || _a === void 0 ? void 0 : _a.length) > 0 && (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.buttons), { justifyContent: justifyContent }), direction: { sm: 'row', xs: 'column' }, spacing: 1 }, (_b = buttons === null || buttons === void 0 ? void 0 : buttons.slice(0, numVisible)) === null || _b === void 0 ? void 0 : _b.map(function (button, index) {
            var _a = buildButtonPath(button, resource, user), action = _a.action, path = _a.path;
            return (react_1.default.createElement(ButtonAction_1.default, { key: index, color: button === null || button === void 0 ? void 0 : button.color, icon: button === null || button === void 0 ? void 0 : button.icon, action: action, actionId: button === null || button === void 0 ? void 0 : button.action_id, path: path, 
                //@ts-ignore
                onClick: button === null || button === void 0 ? void 0 : button.onClick, variant: (button === null || button === void 0 ? void 0 : button.variant) || 'contained', size: size, resource: resource }, button === null || button === void 0 ? void 0 : button.label));
        }))),
        (buttons === null || buttons === void 0 ? void 0 : buttons.length) > numVisible && (react_1.default.createElement(__1.MenuButton, { color: color }, (_c = buttons === null || buttons === void 0 ? void 0 : buttons.slice(numVisible, buttons.length)) === null || _c === void 0 ? void 0 : _c.map(function (button, index) {
            var _a = buildButtonPath(button, resource, user), action = _a.action, path = _a.path;
            return (react_1.default.createElement(ButtonMenu_1.default, { key: index, action: action, path: path, actionId: button === null || button === void 0 ? void 0 : button.action_id, label: button === null || button === void 0 ? void 0 : button.label, icon: button === null || button === void 0 ? void 0 : button.icon, color: button === null || button === void 0 ? void 0 : button.color, onClick: button === null || button === void 0 ? void 0 : button.onClick, resource: resource }));
        })))));
};
exports.default = ButtonActions;
var sx = {
    root: {
        justifyContent: 'space-between',
    },
    buttons: {
        width: '100%',
        justifyContent: 'flex-start',
    },
};
