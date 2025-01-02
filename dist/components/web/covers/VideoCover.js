"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
var react_3 = require("@nextui-org/react");
var VideoCover = function (props) {
    var src = props.src, label = props.label, title = props.title, subtitle = props.subtitle, buttonText = props.buttonText, handleClick = props.handleClick, path = props.path, _a = props.alignItems, alignItems = _a === void 0 ? 'items-center' : _a, actions = props.actions, _b = props.height, height = _b === void 0 ? 400 : _b, enableOverlay = props.enableOverlay, _c = props.fontSize, fontSize = _c === void 0 ? 'md' : _c, editable = props.editable, handleChange = props.handleChange;
    var onClick = (0, hooks_1.useNavigate)({
        path: path,
        handleClick: handleClick,
    });
    return (react_1.default.createElement("div", { className: (0, react_3.cn)('dark relative w-full overflow-hidden', height && "h-[".concat(height, "px]")) },
        react_1.default.createElement("video", { className: "absolute top-0 left-0 w-full h-full object-cover", src: src, autoPlay: true, loop: true, muted: true, playsInline: true }),
        react_1.default.createElement("div", { className: (0, react_3.cn)('relative flex items-center justify-center w-full h-full', enableOverlay && 'bg-black bg-opacity-50') },
            react_1.default.createElement("div", { className: (0, react_3.cn)('flex flex-col space-y-4', alignItems) },
                react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: alignItems === 'items-center' ? 'center' : 'left', size: fontSize, editable: editable, handleChange: handleChange }),
                actions,
                buttonText && (react_1.default.createElement("div", null,
                    react_1.default.createElement(react_2.Button, { size: "lg", color: "primary", 
                        //@ts-ignore
                        onPress: onClick, variant: "solid" }, buttonText)))))));
};
exports.default = VideoCover;
