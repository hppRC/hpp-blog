import { ThemeProvider as EThemeProvider, useTheme as useETheme } from 'emotion-theming';
import React, { memo, useEffect, useState } from 'react';
import { Theme } from 'src/types';

import { useHpprcThemeConfig } from '../hooks';
import { ColorModeContainer } from '../store';

export const useTheme = () => {
  const theme = useETheme<Theme>();
  return theme;
};

export const ThemeProvider: React.FCX = memo(({ children }) => {
  const { lightTheme, darkTheme } = useHpprcThemeConfig();
  const { mode } = ColorModeContainer.useContainer();

  const [theme, setTheme] = useState({});
  useEffect(() => setTheme(mode ? lightTheme : darkTheme), [mode]);

  return <EThemeProvider theme={theme}>{children}</EThemeProvider>;
});
