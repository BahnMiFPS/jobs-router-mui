import { styled } from "@mui/material/styles"

import {
	Button,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material"
import React, { useContext } from "react"
import SkillsPaper from "./SkillsPaper"
import { Link, useLocation, useNavigate } from "react-router-dom"
import AuthContext from "../auth/AuthContext"
// const CardStyle = styled(Card)(({ theme }) => ({
// 	boxShadow: "none",
// 	border: "1px solid black",
// 	width: "100%",
// 	maxWidth: "350px",
// 	minWidth: "270px",
// 	margin: "auto",
// 	display: "flex",
// 	flexDirection: "column",
// 	justifyContent: "space-evenly",
// 	alignItems: "center",
// 	padding: ".5rem",
// }))

function JobCard({ id, title, description, skills }) {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()
	let location = useLocation()
	const hanleClick = (event) => {
		if (auth.user) {
			navigate(`/job/${id}`)
		} else {
			navigate("/login")
		}
	}
	return (
		<Paper
			variant="outlined"
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				padding: 1,
			}}
		>
			<CardContent>
				<Typography variant="subtitle1" component="div">
					{title}
				</Typography>
				<Divider />
				<SkillsPaper skills={skills} />
				<Typography>{description}</Typography>
			</CardContent>
			<Button
				variant="contained"
				component={Link}
				to={`/job/${id}`}
				state={{ backgroundLocation: location }}
				sx={{ width: "130px" }}
			>
				Learn More
			</Button>
		</Paper>
	)
}

export default JobCard
