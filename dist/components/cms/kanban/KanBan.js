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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var KanBan = function (props) {
    var _a;
    var KANBAN_HEADERS = [
        { label: "To Do", value: "todo" },
        { label: "Doing", value: "doing" },
        { label: "Done", value: "done" },
    ];
    var resources = props.resources, handleClick = props.handleClick, handleDrop = props.handleDrop, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b, rest = __rest(props, ["resources", "handleClick", "handleDrop", "displayFields"]);
    var headers = KANBAN_HEADERS;
    var fieldName = "status";
    var _c = (0, react_1.useState)({}), groupedResources = _c[0], setGroupedResources = _c[1];
    var groupBy = function (resources, name) {
        var grouped = {};
        resources.forEach(function (item) {
            if (!item)
                return;
            var groupBy = item[name];
            if (!groupBy) {
                groupBy = headers[0].value;
            }
            if (!grouped[groupBy]) {
                grouped[groupBy] = [];
            }
            grouped[groupBy].push(item);
        });
        return grouped;
    };
    (0, react_1.useEffect)(function () {
        if (resources && headers && fieldName) {
            var grouped = groupBy((0, frontend_js_1.flattenDocuments)(resources), fieldName);
            setGroupedResources(grouped);
        }
    }, [resources, headers, fieldName]);
    if (!groupedResources)
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, (_a = Object.keys(groupedResources)) === null || _a === void 0 ? void 0 : _a.map(function (key) {
        var _a;
        return (react_1.default.createElement(material_1.Stack, { key: key, direction: "column", spacing: 1, sx: sx.column }, (_a = groupedResources[key]) === null || _a === void 0 ? void 0 : _a.map(function (resource) { return (react_1.default.createElement(components_1.Card, { key: resource.id, enableBorder: true, resource: resource, displayFields: displayFields, actions: [], handleClick: handleClick, variant: "grid" })); })));
    })));
};
exports.default = KanBan;
var sx = {
    board: {
        width: "100%",
        overflowX: "scroll",
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    column: {
        width: 320,
        height: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    }
};
