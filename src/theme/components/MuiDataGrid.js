import typography from 'theme/typography'

export default {
	styleOverrides: {
		root: {
			fontFamily: typography.body2.fontFamily,
			'& .MuiInputBase-root': {
				fontFamily: typography.body2.fontFamily,
			},
		},
	},
}
