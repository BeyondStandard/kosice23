import { Box, CardContent, Typography } from "@mui/material"

import type { ProjectDataProps } from "./types"
export function ProjectData({ prop = "ProjectData" }: ProjectDataProps) {
  return (
    <div className="bg-black" style={{ maxHeight: "100%" }}>
      <Box maxWidth={"80%"}>
        <CardContent style={{ padding: "2rem" }}>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            style={{ color: "rgb(0, 140, 255)" }}
          >
            Problem
          </Typography>
          <p style={{ fontSize: "bigger", color: "white" }}>
            Write problem statement here!
          </p>
        </CardContent>
      </Box>
      <Box maxWidth={"80%"}>
        <CardContent style={{ padding: "2rem" }}>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            style={{ color: "rgb(0, 140, 255)" }}
          >
            Our Proposed Solution
          </Typography>
          <p style={{ fontSize: "bigger", color: "white" }}>
            Write proposed solution here!
          </p>
        </CardContent>
      </Box>
      <Box maxWidth={"80%"}>
        <CardContent style={{ padding: "1rem" }}>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            style={{ color: "rgb(0, 140, 255)" }}
          >
            Implementation
          </Typography>
          <img
            src={"src/assets/tech/techStack.png"}
            alt={"Tech Stack"}
            width={"60%"}
          />
        </CardContent>
      </Box>
      <Box maxWidth={"80%"}>
        <CardContent style={{ padding: "2rem" }}>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            style={{ color: "rgb(0, 140, 255)" }}
          >
            Future Plans
          </Typography>
          <p style={{ fontSize: "bigger", color: "white" }}>
            Write future plan here!
          </p>
          <br />
        </CardContent>
      </Box>
    </div>
  )
}
