import React, { useContext } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import {
	createBrowserRouter,
	RouterProvider,
	useLocation,
} from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import AuthProvider from "./auth/AuthProvider"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
		],
	},
	{
		path: "*",
		element: (
			<main>
				<p>There's nothing here!</p>
			</main>
		),
	},
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
)
