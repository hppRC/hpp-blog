import { ThemeProvider as EThemeProvider, useTheme as useETheme } from 'emotion-theming';
import React, { memo, useEffect, useState } from 'react';
import { ColorModeContainer } from 'src/store';
import { Theme } from 'src/types';

const lightTheme = {
  color: `#30303f`,
  backgroundColor: `#ffffff`,
  cardBackground: `transparent`,
  cardBoxShadow: `5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff`,
  codeBackground: `#09090f`,
  headingBorder: `solid 2px #3f8efc`,
  tocBackground: `#d9d9d9`,
} as const;

const darkTheme = {
  color: `#f5f5f5`,
  backgroundColor: `#14141f`,
  cardBackground: `#20202f`,
  cardBoxShadow: `10px 10px 20px #11111a, -10px -10px 20px #171724`,
  codeBackground: `#131313`,
  headingBorder: `solid 2.5px #3f8efc`,
  tocBackground: `#141721`,
} as const;

export const useTheme = (): Theme => {
  const theme = useETheme<Theme>();
  return theme;
};

export const ThemeProvider: React.FCX = memo(({ children }) => {
  const { mode } = ColorModeContainer.useContainer();

  const [theme, setTheme] = useState({});
  useEffect(() => setTheme(mode ? lightTheme : darkTheme), [mode]);

  return <EThemeProvider theme={theme}>{children}</EThemeProvider>;
});
