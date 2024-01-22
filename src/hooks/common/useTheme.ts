import React, { useState, useEffect } from "react";
import { muiTheme } from "../../theme";
import { buildTheme } from "../../helpers";

type ThemeProps = {
  primaryColor?: string;
  bgcolor?: string;
  borderRadius?: number;
  bodyFont?: string;
  headerFont?: string;
  offset?: number;
  mobile?: boolean;
};

const useTheme = (props: ThemeProps) => {
  const {
    primaryColor,
    bgcolor,
    borderRadius,
    bodyFont,
    headerFont,
    offset = 0,
    mobile = false,
  } = props || {};

  const [theme, setTheme] = useState(muiTheme);

  useEffect(() => {
    let breakpoints = {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    };
    if (offset > 0) {
      breakpoints = {
        values: {
          xs: 0,
          sm: breakpoints.values.sm + offset,
          md: breakpoints.values.md + offset,
          lg: breakpoints.values.lg + offset,
          xl: breakpoints.values.xl + offset,
        },
      };
    }

    if (mobile == true) {
      breakpoints = {
        values: {
          xs: 0,
          sm: 5000,
          md: 5000,
          lg: 5000,
          xl: 5000,
        },
      };
    }

    setTheme({
      ...theme,
      breakpoints,
    });
  }, [offset, mobile]);

  useEffect(() => {
    if (headerFont && bodyFont) {
      const typography = {
        ...muiTheme.typography,
        h1: {
          ...muiTheme.typography.h1,
          fontFamily: headerFont ? headerFont : "Inter",
        },
        h2: {
          ...muiTheme.typography.h2,
          fontFamily: headerFont ? headerFont : "Inter",
        },
        h3: {
          ...muiTheme.typography.h3,
          fontFamily: headerFont ? headerFont : "Inter",
        },
        h4: {
          ...muiTheme.typography.h4,
          fontFamily: headerFont ? headerFont : "Inter",
        },
        h5: {
          ...muiTheme.typography.h5,
          fontFamily: headerFont ? headerFont : "Inter",
        },
        h6: {
          ...muiTheme.typography.h6,
          fontFamily: headerFont ? headerFont : "Inter",
        },
        subtitle1: {
          ...muiTheme.typography.subtitle1,
          fontFamily: bodyFont ? bodyFont : "Inter",
        },
        subtitle2: {
          ...muiTheme.typography.subtitle2,
          fontFamily: bodyFont ? bodyFont : "Inter",
        },
        body1: {
          ...muiTheme.typography.body1,
          fontFamily: bodyFont ? bodyFont : "Inter",
        },
        body2: {
          ...muiTheme.typography.body2,
          fontFamily: bodyFont ? bodyFont : "Inter",
        },
        button: {
          ...muiTheme.typography.button,
          fontFamily: bodyFont ? bodyFont : "Inter",
        },
        caption: {
          ...muiTheme.typography.caption,
          fontFamily: bodyFont ? bodyFont : "Inter",
        },
        overline: {
          ...muiTheme.typography.overline,
          fontFamily: bodyFont ? bodyFont : "Inter",
        },
      };

      setTheme({
        ...theme,
        typography,
      });
    }
  }, [headerFont, bodyFont]);

  useEffect(() => {
    const shape = {
      borderRadius: borderRadius || 0,
    };
    setTheme({
      ...theme,
      shape,
    });
  }, [borderRadius]);

  useEffect(() => {
    let newTheme = { ...theme };
    if (primaryColor) {
      newTheme = {
        ...theme,
        palette: {
          ...theme.palette,
          primary: {
            ...theme.palette.primary,
            // @ts-ignore
            main: primaryColor,
          },
        },
      };
    }
    if (bgcolor) {
      newTheme = buildTheme(newTheme, bgcolor);
    }
    if (primaryColor || bgcolor) {
      setTheme(newTheme);
    }
  }, [primaryColor, bgcolor]);

  return {
    theme,
    setTheme,
  };
};

export default useTheme;
