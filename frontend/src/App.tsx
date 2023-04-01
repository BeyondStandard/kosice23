import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles"

import { AppRoutes } from "~/routes"
import { theme } from "~/styles/theme"

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
