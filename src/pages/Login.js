import { Stack } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import LoginModal from "../components/LoginModal"

function Login() {
	let navigate = useNavigate()
	let from = navigate.state?.from?.pathname || "/"
	return (
		<div>
			<Stack sx={{ p: 4, alignItems: "center" }}>
				<LoginForm
					callback={() => {
						navigate(from, { replace: true })
					}}
				/>
			</Stack>
		</div>
	)
}

export default Login
