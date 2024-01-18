import typography from 'theme/typography'
import palette from 'theme/palette'

export default {
	styleOverrides: {
		root: {
			bgcolor: palette.background.hover,
			fontFamily: typography.body2.fontFamily,
		},
		deletable: {
			'&:focus': {},
		},
	},
}
