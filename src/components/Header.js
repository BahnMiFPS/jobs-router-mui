import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import { Avatar, Button } from "@mui/material"
import { Login, Logout, Person } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import AuthContext from "../auth/AuthContext"

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}))

export default function Header() {
	const auth = React.useContext(AuthContext)
	const navigate = useNavigate()
	const handleSignInClick = (event) => {
		navigate("/login")
	}
	const handleSignOutClick = (event) => {
		auth.signout(() => {
			navigate("/")
		})
	}

	const handleSearchChange = (e) => {
		console.log(e.target.value)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						Job Routing
					</Typography>
					<Search sx={{ marginRight: 2 }}>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
							onChange={handleSearchChange}
						/>
					</Search>
					{auth?.user ? (
						<>
							<Typography padding={1}>{auth.user}</Typography>
							<Avatar
								sx={{
									width: 40,
									height: 40,
									margin: 1,
									display: { xs: "none", md: "flex" },
								}}
							>
								{auth.user.slice(0, 1).toUpperCase()}
							</Avatar>
							<Button
								padding="2rem"
								variant="contained"
								startIcon={
									<Logout sx={{ display: { xs: "none", md: "flex" } }} />
								}
								onClick={handleSignOutClick}
							>
								Logout
							</Button>
						</>
					) : (
						<Button
							variant="contained"
							startIcon={<Login sx={{ display: { xs: "none", md: "flex" } }} />}
							onClick={handleSignInClick}
						>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	)
}
