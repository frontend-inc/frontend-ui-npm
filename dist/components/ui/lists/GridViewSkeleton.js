"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var GridViewSkeleton = function (_a) {
  var _b = _a.xs,
    xs = _b === void 0 ? 12 : _b,
    _c = _a.sm,
    sm = _c === void 0 ? 6 : _c,
    _d = _a.md,
    md = _d === void 0 ? 4 : _d,
    _e = _a.lg,
    lg = _e === void 0 ? 3 : _e,
    _f = _a.xl,
    xl = _f === void 0 ? 2 : _f,
    props = __rest(_a, ["xs", "sm", "md", "lg", "xl"]);
  return react_1.default.createElement(
    material_1.Grid,
    { item: true, xs: xs, sm: sm, md: md, lg: lg, xl: xl },
    react_1.default.createElement(
      material_1.Card,
      { elevation: 0, sx: sx.root },
      react_1.default.createElement(
        material_1.CardActionArea,
        null,
        react_1.default.createElement(material_1.Skeleton, {
          variant: "rectangular",
          width: "100%",
          height: 140,
        }),
        react_1.default.createElement(
          material_1.CardContent,
          null,
          react_1.default.createElement(material_1.Skeleton, {
            height: 20,
            width: "60%",
          }),
          react_1.default.createElement(material_1.Skeleton, {
            height: 20,
            width: "80%",
          })
        )
      )
    )
  );
};
exports.default = GridViewSkeleton;
var sx = {
  root: {},
};
