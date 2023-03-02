import React from "react"
import Header from "./components/Header"
import ThemeProvider from "./utils/theme"

function App() {
	return (
		<div className="Home">
			<ThemeProvider>
				<Header />
			</ThemeProvider>
		</div>
	)
}

export default App
