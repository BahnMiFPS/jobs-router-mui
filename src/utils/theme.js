import { CssBaseline } from "@mui/material"
import {
	alpha,
	createTheme,
	ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles"

const PRIMARY = {
	light: "rgb(101, 115, 195)",
	main: "#3f51b5",
	dark: "rgb(44, 56, 126)",
	contrastText: "#FFF",
}
const SECONDARY = {
	light: "rgb(247, 51, 120)",
	main: "#f50057",
	dark: "rgb(171, 0, 60)",
	contrastText: "#FFF",
}
const SUCCESS = {
	lighter: "#E9FCD4",
	light: "#AAF27F",
	main: "#54D62C",
	dark: "#229A16",
	darker: "#08660D",
	contrastText: "#FFF",
}

const GREY = {
	0: "#FFFFFF",
	100: "#F9FAFB",
	200: "#F4F6F8",
	300: "#DFE3E8",
	400: "#C4CDD5",
	500: "#919EAB",
	600: "#637381",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
	500_8: alpha("#919EAB", 0.08),
	500_12: alpha("#919EAB", 0.12),
	500_16: alpha("#919EAB", 0.16),
	500_24: alpha("#919EAB", 0.24),
	500_32: alpha("#919EAB", 0.32),
	500_48: alpha("#919EAB", 0.48),
	500_56: alpha("#919EAB", 0.56),
	500_80: alpha("#919EAB", 0.8),
}

function ThemeProvider({ children }) {
	const themeOptions = {
		palette: {
			mode: "dark",
			primary: PRIMARY,
			secondary: SECONDARY,
			success: SUCCESS,
			text: {
				primary: "#fff",
				secondary: "rgba(255, 255, 255, 0.7)",
				disabled: "rgba(255, 255, 255, 0.5)",
			},
			background: { paper: "#424242", default: "#303030", neutral: GREY[200] },
			action: {
				active: GREY[600],
				hover: GREY[500_8],
				selected: GREY[500_16],
				disabled: GREY[500_80],
				disabledBackground: GREY[500_24],
				focus: GREY[500_24],
				hoverOpacity: 0.08,
				disabledOpacity: 0.48,
			},
		},
		shape: { borderRadius: 8 },
		mode: "dark",
	}

	const theme = createTheme(themeOptions)

	return (
		<MUIThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</MUIThemeProvider>
	)
}

export default ThemeProvider
