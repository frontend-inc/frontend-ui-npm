"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarouselResponsive = void 0;
var theme_1 = require("../theme");
var getCarouselResponsive = function (theme) {
  if (theme === void 0) {
    theme = theme_1.muiTheme;
  }
  var _a = (theme === null || theme === void 0 ? void 0 : theme.breakpoints)
      .values,
    xs = _a.xs,
    sm = _a.sm,
    md = _a.md,
    lg = _a.lg,
    xl = _a.xl;
  return {
    superLargeDesktop: {
      breakpoint: { max: xl, min: lg },
      items: 3,
    },
    desktop: {
      breakpoint: { max: lg, min: md },
      items: 3,
    },
    tablet: {
      breakpoint: { max: md, min: sm },
      items: 2,
    },
    mobile: {
      breakpoint: { max: sm, min: xs },
      items: 1,
    },
  };
};
exports.getCarouselResponsive = getCarouselResponsive;
