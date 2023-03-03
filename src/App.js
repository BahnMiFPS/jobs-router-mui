import React, { useContext } from "react"
import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
	useLocation,
} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import AuthContext from "./auth/AuthContext"
import LoginModal from "./components/LoginModal"
import LoginForm from "./components/LoginForm"
import JobDetail from "./pages/JobDetail"

function App() {
	const location = useLocation()
	const auth = useContext(AuthContext)
	const state = location.state

	return (
		<>
			<Routes
				location={
					location.state?.backgroundLocation
						? location.state.backgroundLocation
						: location
				}
			>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route path="login" element={<Login />} />
				</Route>
				<Route
					path="*"
					element={
						<main>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
			{state && auth.user ? (
				<Routes>
					<Route path="/job/:id" element={<JobDetail />}></Route>
				</Routes>
			) : (
				<Routes>
					<Route path="/job/:id" element={<LoginModal />}></Route>
				</Routes>
			)}
		</>
	)
}

export default App
