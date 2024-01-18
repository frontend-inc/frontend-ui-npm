import breakpoints from 'theme/breakpoints'
import components from 'theme/components'
import palette from 'theme/palette'
import shape from 'theme/shape'
import typography from 'theme/typography'
import spacing from 'theme/spacing'

export const muiTheme = {
	breakpoints,
	components,
	palette: {
		...palette,
		editor: {
			dark: '#282C34',
			main: '#343842',
			light: '#343842',
		},
	},
	typography,
	shape,
	spacing,
}
