"use strict";
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
var __1 = require("../../..");
var MultipleChoiceAnswerInput = function (props) {
    var label = props.label, _a = props.layout, layout = _a === void 0 ? 'list' : _a, _b = props.multiSelect, multiSelect = _b === void 0 ? true : _b, _c = props.direction, direction = _c === void 0 ? 'column' : _c, name = props.name, value = props.value, handleChange = props.handleChange, _d = props.answers, answers = _d === void 0 ? [] : _d;
    var _e = (0, react_1.useState)(value || []), selected = _e[0], setSelected = _e[1];
    var handleSelect = function (value) {
        if (Array.isArray(selected) && selected.find(function (i) { return i === value; })) {
            setSelected(selected.filter(function (i) { return i != value; }));
        }
        else {
            if (multiSelect) {
                setSelected(selected.concat(value));
            }
            else {
                setSelected([value]);
            }
        }
    };
    (0, react_1.useEffect)(function () {
        if (Array.isArray(selected)) {
            handleChange({
                target: {
                    name: name,
                    value: selected || [],
                },
            });
        }
    }, [selected]);
    return (react_1.default.createElement(material_1.Stack, { sx: sx.stack, direction: direction, spacing: 1 },
        react_1.default.createElement(material_1.Typography, { variant: "caption", sx: sx.label, gutterBottom: true }, label),
        layout === 'list' && (react_1.default.createElement(material_1.List, { disablePadding: true, sx: sx.list }, answers === null || answers === void 0 ? void 0 : answers.map(function (answer, idx) {
            var _a;
            return (react_1.default.createElement(__1.ResourceListItem, { enableBorder: true, selected: selected === null || selected === void 0 ? void 0 : selected.includes(answer.value), image: (_a = answer === null || answer === void 0 ? void 0 : answer.image) === null || _a === void 0 ? void 0 : _a.url, primary: answer.title, secondary: answer.description, handleClick: function () { return handleSelect(answer.value); }, slots: {
                    image: {
                        height: 120,
                        width: 120
                    }
                } }));
        }))),
        layout == 'grid' && (react_1.default.createElement(material_1.Box, { sx: sx.grid }, answers === null || answers === void 0 ? void 0 : answers.map(function (answer, idx) {
            var _a;
            return (react_1.default.createElement(material_1.Box, { sx: sx.item, key: idx },
                react_1.default.createElement(__1.ResourceGridItem, { enableBorder: true, selected: selected === null || selected === void 0 ? void 0 : selected.includes(answer.value), image: (_a = answer === null || answer === void 0 ? void 0 : answer.image) === null || _a === void 0 ? void 0 : _a.url, primary: answer.title, secondary: answer.description, handleClick: function () { return handleSelect(answer.value); }, slots: {
                        image: {
                            height: 120,
                            width: 120
                        }
                    } })));
        })))));
};
exports.default = MultipleChoiceAnswerInput;
var sx = {
    list: {
        width: '100%',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
    },
    item: {
        width: '100%',
        gridColumn: 'span 1',
    },
    label: {
        mb: 0,
        minWidth: '100px',
        color: 'text.secondary',
    },
    stack: {
        width: '100%',
        alignItems: 'flex-start',
    },
    stackVertical: {
        alignItems: 'center',
    },
};