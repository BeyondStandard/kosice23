import { Box, Link } from "@mui/material"
// import logo from "/src/assets/logo.png"
import React from "react"

import type { HeaderProps } from "./types"
export function Header({ prop = "Header" }: HeaderProps) {
  return (
    <div>
      <div className="flex w-full h-12 bg-gray-600 drop-shadow-md justify-between content-center">
        <div className="w-full flex justify-between content-center mx-2">
          {/* <img className="h-14" src={logo} alt={"Logo"} /> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "right",
              textAlign: "center",
              paddingTop: "1rem",
            }}
          >
            <Link
              sx={{ minWidth: 100, color: "white", textDecoration: "none" }}
              href={"/"}
            >
              Home
            </Link>
            <Link
              sx={{ minWidth: 100, color: "white", textDecoration: "none" }}
              href={"/project"}
            >
              Project
            </Link>
            <Link
              sx={{ minWidth: 100, color: "white", textDecoration: "none" }}
              href={"/team"}
            >
              Team
            </Link>
          </Box>
        </div>
      </div>
    </div>
  )
}
const style = {
  flexGrow: 1,
}
