import React, { useContext, useEffect, useState } from 'react'
import { LightDarkContext } from 'context'
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { ThemeContext } from 'context'
import { buildTheme } from 'helpers'

type LightDarkProviderProps = {
	children: React.ReactNode
	bgcolor: string
}

const LightDarkProvider = (props: LightDarkProviderProps) => {
	const { children, bgcolor } = props || {}

	const { theme } = useContext(ThemeContext)
	const [localTheme, setLocalTheme] = useState(theme)

	useEffect(() => {
    let newTheme = localTheme 
		if(bgcolor && theme){
      newTheme = buildTheme(theme, bgcolor)
		}
    if(theme?.palette?.primary?.main != localTheme?.palette?.primary?.main){
      newTheme = {
        ...newTheme,
        palette: {
          ...localTheme.palette,
          primary: {
            ...localTheme.palette.primary,
            main: theme?.palette?.primary?.main
          }
        }
      }
    }
    if(theme?.breakpoints?.values != localTheme?.breakpoints?.values){
      newTheme = {
        ...newTheme,
        breakpoints: theme?.breakpoints
      }
    }
    if(newTheme && newTheme != localTheme){
      setLocalTheme(newTheme)
    }
	}, [bgcolor, theme?.breakpoints, theme?.palette?.primary?.main])

	const value = {
		theme,
	}

	return (
		<LightDarkContext.Provider value={value}>
			<MuiThemeProvider theme={createTheme(localTheme)}>
				{children}
			</MuiThemeProvider>
		</LightDarkContext.Provider>
	)
}

export default LightDarkProvider
