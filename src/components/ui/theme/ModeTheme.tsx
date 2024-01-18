import React, { useContext, useState, useEffect } from 'react'
import { LightDarkProvider, ThemeContext } from 'context'

type ModeThemeProps = {
  mode?: 'light' | 'dark' | 'accent'
  children?: React.ReactNode
}

const ModeTheme: React.FC<ModeThemeProps> = (props) => {  
  const { mode="light"} = props || {}  
	const { theme } = useContext(ThemeContext)
	const [bgcolor, setBgcolor] = useState('#ffffff')

	useEffect(() => {
		if (mode) {
			switch (mode) {
				case 'light':
					setBgcolor('#ffffff')
					break
				case 'dark':
					setBgcolor('#000000')
					break
				case 'accent':
					setBgcolor(theme?.palette?.primary?.main)
					break          
			}
		}
	}, [mode, theme])  
  
  return (
    <LightDarkProvider bgcolor={bgcolor}>
      {props.children}
    </LightDarkProvider>
  )
}

export default ModeTheme