"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../hooks");
var usePolicies = function () {
    var apiUrl = (0, hooks_1.useApp)().apiUrl;
    var _a = (0, frontend_js_1.useResource)({
        name: 'policy',
        url: "".concat(apiUrl, "/cms/policies"),
    }), loading = _a.loading, policy = _a.resource, policies = _a.resources, findPolicy = _a.findOne, findPolicies = _a.findMany;
    return {
        loading: loading,
        policy: policy,
        policies: policies,
        findPolicy: findPolicy,
        findPolicies: findPolicies,
    };
};
exports.default = usePolicies;
