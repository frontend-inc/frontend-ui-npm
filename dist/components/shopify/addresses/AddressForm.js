"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var AddressForm = function (props) {
    var address = props.address, handleChange = props.handleChange;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(components_1.TextInput, { placeholder: "First name", name: "firstName", value: (address === null || address === void 0 ? void 0 : address.firstName) || "", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { placeholder: "Last name", name: "lastName", value: (address === null || address === void 0 ? void 0 : address.lastName) || "", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { placeholder: "Street Address Line 1", name: "address1", value: (address === null || address === void 0 ? void 0 : address.address1) || "", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { placeholder: "Street Address Line 2", name: "address2", value: (address === null || address === void 0 ? void 0 : address.address2) || "", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { placeholder: "City", name: "city", value: (address === null || address === void 0 ? void 0 : address.city) || "", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { placeholder: "State", name: "province", value: (address === null || address === void 0 ? void 0 : address.province) || "", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { placeholder: "Country", name: "country", value: (address === null || address === void 0 ? void 0 : address.country) || "", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { placeholder: "ZIP Code", name: "zip", value: (address === null || address === void 0 ? void 0 : address.zip) || "", handleChange: handleChange })));
};
exports.default = AddressForm;
