"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var context_1 = require("../../context");
var usePageNavigate = function (props) {
  var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
  var router = (0, navigation_1.useRouter)();
  var navigate = function (item, page) {
    var _a = item || {},
      handle = _a.handle,
      baseUrl = _a.baseUrl;
    var pageHandle = (page || {}).handle;
    var url = "".concat(clientUrl, "/").concat(pageHandle);
    switch (page === null || page === void 0 ? void 0 : page.page_type) {
      case "show":
        url = ""
          .concat(clientUrl)
          .concat(baseUrl, "/")
          .concat(pageHandle, "/")
          .concat(handle);
        break;
      case "edit":
        url = ""
          .concat(clientUrl)
          .concat(baseUrl, "/")
          .concat(pageHandle, "/")
          .concat(handle);
        break;
      case "new":
        url = ""
          .concat(clientUrl)
          .concat(baseUrl, "/")
          .concat(pageHandle, "/")
          .concat(handle);
        break;
    }
    router.push(url);
  };
  return { navigate: navigate };
};
exports.default = usePageNavigate;
