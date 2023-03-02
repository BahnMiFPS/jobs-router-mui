import { Stack } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import LoginModal from "../components/LoginModal"

function Login() {
	let navigate = useNavigate()
	let from = navigate.state?.from?.pathname || "/"
	return (
		<div>
			<Stack sx={{ p: 4, alignItems: "center" }}>
				<LoginModal />
			</Stack>
		</div>
	)
}

export default Login
