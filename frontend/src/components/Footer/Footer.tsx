import { AppBar, Toolbar, Typography } from "@mui/material"

import type { FooterProps } from "./types"
export function Footer({ prop = "Footer" }: FooterProps) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={style}>
          <Typography>&#169; HackaTUM 2022</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
const style = {
  display: "flex",
  justifyContent: "center",
  background: "rgb(255,95, 0)",
}
