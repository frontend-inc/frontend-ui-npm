import { Box, Card, CardActionArea, CardContent, Skeleton } from '@mui/material'

const CarouselViewSkeleton = ({ ...props }) => {
	return (
		<Box sx={sx.root}>
			<Card
				elevation={0}
				sx={{
					...sx.card,
				}}
			>
				<CardActionArea disableRipple>
					<Skeleton
						variant="rectangular"
						width={'100%'}
						height={140}
						sx={sx.skeletonImage}
					/>
					<CardContent>
						<Skeleton height={20} width="60%" />
						<Skeleton height={20} width="80%" />
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	)
}

export default CarouselViewSkeleton

const sx = {
	root: {
		p: 2,
	},
}
