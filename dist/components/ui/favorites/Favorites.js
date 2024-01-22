"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var components_1 = require("../../../components");
var Favorites = function (props) {
  var currentUser = (0, hooks_1.useAuth)().currentUser;
  var _a = props.layout,
    layout = _a === void 0 ? "list" : _a,
    _b = props.style,
    style = _b === void 0 ? "card" : _b,
    url = props.url,
    navigateUrl = props.navigateUrl,
    _c = props.perPage,
    perPage = _c === void 0 ? 5 : _c,
    _d = props.editing,
    editing = _d === void 0 ? false : _d,
    buttonText = props.buttonText,
    _e = props.query,
    defaultQuery = _e === void 0 ? null : _e,
    _f = props.enableBorder,
    enableBorder = _f === void 0 ? false : _f,
    _g = props.enableGradient,
    enableGradient = _g === void 0 ? false : _g,
    _h = props.enableOverlay,
    enableOverlay = _h === void 0 ? false : _h;
  var router = (0, navigation_1.useRouter)();
  var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
  var _j = (0, hooks_1.useResource)({
      url: url,
    }),
    loading = _j.loading,
    query = _j.query,
    resources = _j.resources,
    findMany = _j.findMany;
  var handleClick = function (item) {
    if (
      !editing &&
      clientUrl &&
      navigateUrl &&
      (item === null || item === void 0 ? void 0 : item.handle)
    ) {
      router.push(
        ""
          .concat(clientUrl)
          .concat(navigateUrl, "/")
          .concat(item === null || item === void 0 ? void 0 : item.handle)
      );
    }
  };
  (0, react_1.useEffect)(
    function () {
      var _a;
      if (url && currentUser) {
        var documentIds =
          (_a =
            currentUser === null || currentUser === void 0
              ? void 0
              : currentUser.favorites) === null || _a === void 0
            ? void 0
            : _a.map(function (document) {
                return document.id;
              });
        findMany(
          __assign(__assign(__assign({}, query), defaultQuery), {
            filters: {
              AND: [
                {
                  id: {
                    in: documentIds,
                  },
                },
              ],
            },
            per_page: perPage,
            page: 1,
          })
        );
      }
    },
    [currentUser, url, defaultQuery]
  );
  return react_1.default.createElement(components_1.StyledList, {
    resources: resources,
    layout: layout,
    style: style,
    editing: editing,
    loading: loading,
    buttonText: buttonText,
    handleClick: handleClick,
    enableBorder: enableBorder,
    enableGradient: enableGradient,
    enableOverlay: enableOverlay,
    emptyTitle: "No favorites found",
    emptyDescription: "Try adding some favorites",
    emptyIcon: "Bookmark",
  });
};
exports.default = Favorites;
