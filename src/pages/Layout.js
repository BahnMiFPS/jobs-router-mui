import ThemeProvider from "../utils/theme"
import React from "react"
import { Outlet } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import Header from "../components/Header"

function Layout() {
	return (
		<Stack
			sx={{
				minHeight: "100vh",
			}}
		>
			<Header />
			<Outlet />
			<Box sx={{ flexGrow: 1 }} />
		</Stack>
	)
}

export default Layout
