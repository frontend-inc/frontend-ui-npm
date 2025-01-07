'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var react_2 = require("@nextui-org/react");
var date_1 = require("@internationalized/date");
function DateInput(props) {
    var _a = props || {}, errors = _a.errors, label = _a.label, name = _a.name, value = _a.value, handleChange = _a.handleChange;
    var currentDate = (0, moment_1.default)().format('YYYY-MM-DD');
    var handleDateChange = function (date) {
        var formattedDate = (0, moment_1.default)(date).format('YYYY-MM-DD');
        handleChange({
            target: {
                name: name,
                value: formattedDate,
            },
        });
    };
    return (react_1.default.createElement(react_2.DatePicker, { label: label, name: name, 
        //@ts-ignore
        defaultValue: (0, date_1.parseDate)(value || currentDate), className: "max-w-[284px]", 
        //@ts-ignore
        onChange: handleDateChange }));
}
exports.default = DateInput;
