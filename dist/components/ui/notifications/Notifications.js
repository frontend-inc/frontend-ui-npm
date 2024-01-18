"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("components");
var react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
var Notifications = function (props) {
    var notifications = props.notifications;
    var _a = react_1.default.useState(0), activeStep = _a[0], setActiveStep = _a[1];
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    if (!(notifications === null || notifications === void 0 ? void 0 : notifications.length))
        return null;
    return (react_1.default.createElement(material_1.List, { sx: sx.root },
        react_1.default.createElement(react_swipeable_views_1.default, { axis: 'x', index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true }, notifications === null || notifications === void 0 ? void 0 : notifications.map(function (notification, i) { return (react_1.default.createElement(components_1.Notification, { key: i, text: notification.text, buttonText: notification.buttonText, path: notification.path, discountCode: notification.discountCode, copyToClipboard: notification.copyToClipboard })); }))));
};
exports.default = Notifications;
var sx = {
    root: {
        width: '100%',
        position: 'relative',
        top: 0,
        left: 0,
        p: 0,
        height: '36px',
        zIndex: function (theme) { return theme.zIndex.drawer - 1; },
    },
    item: {
        width: '100%',
    }
};
