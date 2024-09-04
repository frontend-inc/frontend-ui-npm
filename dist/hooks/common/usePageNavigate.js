"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var hooks_1 = require("../../hooks");
var usePageNavigate = function (props) {
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var router = (0, router_1.useRouter)();
    var navigate = function (item, page) {
        var _a = item || {}, handle = _a.handle, baseUrl = _a.baseUrl;
        var pageHandle = (page || {}).handle;
        var url = "".concat(clientUrl, "/").concat(pageHandle);
        switch (page === null || page === void 0 ? void 0 : page.page_type) {
            case 'show':
                url = "".concat(clientUrl).concat(baseUrl, "/").concat(pageHandle, "/").concat(handle);
                break;
            case 'edit':
                url = "".concat(clientUrl).concat(baseUrl, "/").concat(pageHandle, "/").concat(handle);
                break;
            case 'new':
                url = "".concat(clientUrl).concat(baseUrl, "/").concat(pageHandle, "/").concat(handle);
                break;
        }
        router.push(url);
    };
    return { navigate: navigate };
};
exports.default = usePageNavigate;
