import ThemeProvider from "../utils/theme"
import React from "react"
import { Outlet } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import Header from "../components/Header"

function Home() {
	return (
		<ThemeProvider>
			<Stack
				sx={{
					minHeight: "100vh",
					backgroundColor: (theme) => theme.palette.primary.light,
				}}
			>
				<Header />
				<Outlet />
				<Box sx={{ flexGrow: 1 }} />
			</Stack>
		</ThemeProvider>
	)
}

export default Home
