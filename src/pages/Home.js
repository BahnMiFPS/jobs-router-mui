import { Container, Grid } from "@mui/material"
import React from "react"
import JobCard from "../components/JobCard"
import jobs from "../jobs.json"
function Home() {
	return (
		<Container sx={{ padding: 5 }}>
			<Grid container spacing={3}>
				{jobs.map((job) => (
					<Grid key={job.id} item lg={3} md={4} sm={6} xs={12}>
						<JobCard
							id={job.id}
							title={job.title}
							description={job.description}
							skills={job.skills}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Home
