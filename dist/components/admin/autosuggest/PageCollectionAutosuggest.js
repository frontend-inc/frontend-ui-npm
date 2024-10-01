"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var PageCollectionAutosuggest = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var collectionId = props.collectionId, errors = props.errors, value = props.value, _a = props.name, name = _a === void 0 ? 'page_id' : _a, label = props.label, handleChange = props.handleChange, query = props.query, _b = props.valueParam, valueParam = _b === void 0 ? 'id' : _b, _c = props.direction, direction = _c === void 0 ? 'column' : _c;
    if (!collectionId)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { direction: direction, errors: errors, name: name, label: label, value: value || '', displayField: "title", valueParam: valueParam, url: "".concat(apiUrl, "/pages"), placeholder: "Select page", handleChange: handleChange, defaultQuery: {
            filters: {
                AND: [
                    { collection_id: { eq: collectionId } },
                    {
                        page_type: { eq: 'cms' },
                    },
                ],
            },
        }, enableClear: true }));
};
exports.default = PageCollectionAutosuggest;
