import { styled } from "@mui/material/styles"

import { Card, CardContent, Divider, Typography } from "@mui/material"
import React from "react"
import SkillsPaper from "./SkillsPaper"
const CardStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	border: "1px solid black",
	width: "100%",
	maxWidth: "350px",
	minWidth: "270px",
	height: "320px",
	margin: "auto",
	backgroundColor: theme.palette.primary.light,
}))

function JobCard({ id, title, description, skills }) {
	return (
		<CardStyle
			variant="outlined"
			sx={{ background: (theme) => theme.palette.primary.dark }}
		>
			<CardContent>
				<Typography
					variant="subtitle1"
					component="div"
					sx={{ color: (theme) => theme.palette.common.white }}
				>
					{title}
				</Typography>
				<Divider />
				<SkillsPaper skills={skills} />
				<Typography sx={{ color: (theme) => theme.palette.common.white }}>
					{description}
				</Typography>
			</CardContent>
		</CardStyle>
	)
}

export default JobCard
