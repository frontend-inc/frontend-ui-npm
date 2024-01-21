import React from 'react'
import ThemeContext from './ThemeContext'
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { useTheme } from '../../hooks'

type ThemeProviderProps = {
	children: React.ReactNode
	primaryColor?: string
	bgcolor?: string
	headerFont?: string
	bodyFont?: string
	borderRadius?: number
	mobile?: boolean
	offset?: number
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const {
		children,
		primaryColor,
		bgcolor,
		headerFont = 'Inter',
		bodyFont = 'Roboto',
		borderRadius = 0,
		mobile,
		offset = 0,
	} = props || {}

	const { theme, setTheme } = useTheme({
		primaryColor,
		bgcolor,
		headerFont,
		bodyFont,
		borderRadius,
		mobile,
		offset,
	})

	const value = {
		theme,
		setTheme,
	}

	return (
		<ThemeContext.Provider value={value}>
			<MuiThemeProvider theme={
        // @ts-ignore
        createTheme(theme)
      }>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
