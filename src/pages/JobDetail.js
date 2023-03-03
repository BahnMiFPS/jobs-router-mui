import React, { useEffect, useState } from "react"
import RequireAuth from "../auth/RequireAuth"
import jobs from "../jobs.json"
import { useNavigate, useParams } from "react-router-dom"
import { Box, Card, CardContent, Modal, Typography } from "@mui/material"
import SkillsPaper from "../components/SkillsPaper"
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: { xs: "90%", md: 600 },
	bgcolor: "background.paper",
	borderRadius: 2,
	border: "none",
}
async function getJob(id) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, 100)
	})
	await promise
	return jobs.find((job) => job.id === id)
}

function JobDetail() {
	const [job, setJob] = useState()
	let { id } = useParams()
	const navigate = useNavigate()
	const handleClose = () => {
		navigate(-1)
	}
	useEffect(() => {
		const fetch = async () => {
			const data = await getJob(id)
			setJob(data)
		}
		fetch()
	}, [id])
	return (
		<div>
			<Modal
				open={true}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Card
						sx={{
							border: "none",
							boxShadow: 0,
						}}
					>
						<CardContent>
							<Typography variant="h5" component="div">
								{job?.title}
							</Typography>
							<SkillsPaper skills={job?.skills} />
							<Typography>{job?.description}</Typography>
							<Typography variant="h6" component="div">
								City: {job?.city}
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</Modal>
		</div>
	)
}

export default JobDetail
