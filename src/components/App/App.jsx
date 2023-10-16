import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import {SideBar,Feed,RightBar, Navbar, Add} from "../"
import { useState } from "react"
const App = () => { 
  const [mode, setMode] = useState("light") 
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App