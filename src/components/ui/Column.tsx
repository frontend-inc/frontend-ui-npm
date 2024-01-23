import React, { useContext } from 'react'
import { Container } from '@mui/material'
import { ThemeProvider, ThemeContext } from '../../context'

type ColumnProps = {
	children: React.ReactNode
	bgcolor?: string
  py?: number
  gap?: number 
  cols?: number
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Column: React.FC<ColumnProps> = (props) => {
	const { children, cols=1, gap=0, py=4, bgcolor, maxWidth } = props
  const { theme } = useContext(ThemeContext)
	return (
    <ThemeProvider 
      muiTheme={ theme }
      bgcolor={ bgcolor }
    >
      <Container
        sx={{
          ...sx.root,        
          gridTemplateColumns: { 
            sm: `repeat(${Number(cols)}, 1fr)`, 
            xs: '1fr'
          },
          gap,
          py,
          px: py > 0 ? 2 : 0,
          bgcolor,
        }}
        maxWidth={maxWidth}
      >
        {children}
      </Container>
    </ThemeProvider>
	)
}

export default Column

const sx = {
	root: {
		py: 4,
	},
}
