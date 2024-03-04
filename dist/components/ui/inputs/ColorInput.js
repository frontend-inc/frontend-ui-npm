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
var material_1 = require("@mui/material");
var COLORS = __importStar(require("@mui/material/colors"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var index_1 = require("../../../constants/index");
var TransparentColor = function (props) {
    var value = props.value, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Tooltip, { title: "Transparent" },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign(__assign({}, sx.color), sx.transparent), (value == '' && sx.selected)), { bgcolor: '#FFF' }), onClick: handleClick })));
};
var ColorInput = function (props) {
    var label = props.label, name = props.name, value = props.value, _a = props.disableTone, disableTone = _a === void 0 ? false : _a, handleChange = props.handleChange;
    var _b = (0, react_1.useState)(500), tone = _b[0], setTone = _b[1];
    var _c = (0, react_1.useState)(null), color = _c[0], setColor = _c[1];
    var _d = (0, react_1.useState)(value || ''), hex = _d[0], setHex = _d[1];
    var _e = (0, react_1.useState)(value || ''), text = _e[0], setText = _e[1];
    var _f = (0, hooks_1.useMenu)(), open = _f.open, anchorEl = _f.anchorEl, openMenu = _f.openMenu, closeMenu = _f.closeMenu;
    var handleToneChange = function (ev, newTone) {
        setTone(newTone);
    };
    var handleColorChange = function (color) {
        setColor(color);
    };
    var handleHexColorChange = function (hexColor) {
        setHex(hexColor);
        closeMenu();
    };
    var handleTextChange = function (ev) {
        var value = ev.target.value;
        if (!value.startsWith('#')) {
            value = "#".concat(value);
        }
        if ((value === null || value === void 0 ? void 0 : value.length) == 7) {
            setHex(value);
        }
    };
    (0, react_1.useEffect)(function () {
        if (value) {
            setHex(value);
            setText(value);
        }
    }, [value]);
    (0, react_1.useEffect)(function () {
        if (color) {
            var hexColor = COLORS[color][tone];
            setHex(hexColor);
        }
    }, [color]);
    (0, react_1.useEffect)(function () {
        handleChange({
            target: {
                name: name,
                value: hex,
            },
        });
    }, [hex]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        label && (react_1.default.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, label)),
        react_1.default.createElement(material_1.Button, { sx: sx.button, fullWidth: true, variant: "outlined", color: "secondary", endIcon: react_1.default.createElement(material_1.Stack, { direction: 'row', spacing: 0 },
                react_1.default.createElement(material_1.Tooltip, { title: value },
                    react_1.default.createElement(material_1.IconButton, null, value ? (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.color), { bgcolor: value }) })) : (react_1.default.createElement(TransparentColor, { value: value, handleClick: openMenu })))),
                react_1.default.createElement(material_1.IconButton, { size: "small" },
                    react_1.default.createElement(components_1.Icon, { name: "ChevronDown", size: 20 }))), onClick: openMenu }, "Choose color"),
        react_1.default.createElement(components_1.Popup, { open: open, anchorEl: anchorEl, handleClose: closeMenu },
            react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "column", sx: sx.root },
                react_1.default.createElement(material_1.Box, { sx: sx.grid },
                    index_1.HEX_COLORS.map(function (hexColor) { return (react_1.default.createElement(material_1.Tooltip, { title: hexColor.label },
                        react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.color), (hex == (hexColor === null || hexColor === void 0 ? void 0 : hexColor.value) && sx.selected)), { bgcolor: hexColor === null || hexColor === void 0 ? void 0 : hexColor.value }), onClick: function () { return handleHexColorChange(hexColor === null || hexColor === void 0 ? void 0 : hexColor.value); } }))); }),
                    react_1.default.createElement(TransparentColor, { value: hex, handleClick: function () { return handleHexColorChange(''); } })),
                react_1.default.createElement(material_1.Box, { sx: sx.grid }, index_1.MUI_COLORS.map(function (color) { return (react_1.default.createElement(material_1.Tooltip, { title: color, key: color },
                    react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.color), (hex == COLORS[color][tone] && sx.selected)), { bgcolor: COLORS[color][tone] }), onClick: function () { return handleColorChange(color); } }))); })),
                !disableTone && (react_1.default.createElement(material_1.Stack, { spacing: 0, sx: sx.slider },
                    react_1.default.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, "Color tone"),
                    react_1.default.createElement(material_1.Slider, { "aria-label": "Color tone", defaultValue: [100, 900], onChange: handleToneChange, step: 100, min: 100, max: 900, value: tone }))),
                react_1.default.createElement(material_1.Box, { sx: sx.input },
                    react_1.default.createElement(components_1.TextInput, { name: name, value: text, handleChange: handleTextChange }))))));
};
exports.default = ColorInput;
var sx = {
    root: {
        width: '100%',
    },
    button: {
        py: 0,
        justifyContent: 'space-between',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '4px',
    },
    slider: {
        width: '100%',
    },
    color: {
        border: '2px solid transparent',
        borderRadius: '8px',
        height: '32px',
        width: '32px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    selected: {
        borderColor: 'common.white',
    },
    input: {
        width: '100%'
    },
    transparent: {
        background: 'linear-gradient(to top left,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),rgba(0,0,0,0.4) 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%)'
    }
};
