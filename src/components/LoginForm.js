import React, { useState, useContext } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import AuthContext from "../auth/AuthContext"

const style = {
	bgcolor: "background.paper",
	display: "flex",
	flexDirection: "column",
	maxWidth: "700px",
	border: "1px solid",
	padding: "10px",
	borderRadius: "5px",
}

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	)
}

export default function LoginForm({ callback }) {
	const [email] = useState("luongquangvu")
	const [password] = useState("123")

	const auth = useContext(AuthContext)
	const handleLogin = () => {
		auth.singin(email, callback)
	}
	// const handleSubmit = (event) => {
	// 	event.preventDefault()
	// 	const data = new FormData(event.currentTarget)
	// 	console.log({
	// 		email: data.get("email"),
	// 		password: data.get("password"),
	// 	})
	// 	auth.signin(email, callback)
	// }
	return (
		<Grid container component="main" style={style}>
			<CssBaseline />

			<Box
				sx={{
					my: 8,
					mx: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						variant="outlined"
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						onClick={handleLogin}
						// type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
					<Copyright sx={{ mt: 5 }} />
				</Box>
			</Box>
		</Grid>
	)
}
