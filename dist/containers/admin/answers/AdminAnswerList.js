"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminAnswerItem_1 = __importDefault(require("./AdminAnswerItem"));
var AdminAnswerCreate_1 = __importDefault(require("./AdminAnswerCreate"));
var AdminAnswerEdit_1 = __importDefault(require("./AdminAnswerEdit"));
var AdminAnswerShow_1 = __importDefault(require("./AdminAnswerShow"));
var AdminAnswerToolbar_1 = __importDefault(require("./AdminAnswerToolbar"));
var AdminAnswersList = function (props) {
    var _a = props || {}, questionId = _a.questionId, _b = _a.direction, direction = _b === void 0 ? 'row' : _b;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var url = "".concat(apiUrl, "/questions/").concat(questionId, "/answers");
    return (react_1.default.createElement(components_1.ResourceList, { direction: direction, sortable: true, url: url, name: 'answer', enableEdit: true, enableDelete: true, enableCreate: true, enableShow: true, create: AdminAnswerCreate_1.default, edit: AdminAnswerEdit_1.default, show: AdminAnswerShow_1.default, toolbar: AdminAnswerToolbar_1.default, component: AdminAnswerItem_1.default, emptyIcon: "CircleCheck", emptyTitle: "No answer choices", emptyDescription: "Add answer choices here." }));
};
exports.default = AdminAnswersList;
