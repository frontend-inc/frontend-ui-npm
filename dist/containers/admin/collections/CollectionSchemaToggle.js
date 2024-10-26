'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var navigation_1 = require("next/navigation");
var CollectionSchemaToggle = function (props) {
    var router = (0, navigation_1.useRouter)();
    var _a = (0, navigation_1.useParams)(), appId = _a.app_id, collectionId = _a.collection_id;
    var _b = props.tab, tab = _b === void 0 ? 'content' : _b;
    var handleClick = function (value) {
        if (value == 'content') {
            router.push("/dashboard/".concat(appId, "/collections/").concat(collectionId));
            return;
        }
        else {
            router.push("/dashboard/".concat(appId, "/schema/").concat(collectionId));
            return;
        }
    };
    return (react_1.default.createElement(components_1.ButtonTabs, { options: [
            { label: 'Content', value: 'content', icon: 'Database' },
            { label: 'Fields', value: 'fields', icon: 'Type' },
        ], handleChange: handleClick, value: tab }));
};
exports.default = CollectionSchemaToggle;
