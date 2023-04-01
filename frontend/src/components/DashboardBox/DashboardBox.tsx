import PropTypes from "prop-types"
import React from "react"

import type { DashboardBoxProps } from "./types"

export const DashboardBox: React.FC<DashboardBoxProps> = (props) => {
  return (
    <div className="w-full h-full bg-zinc-800 drop-shadow-md rounded-sm">
      {props.title && (
        <p className="text-white text-center text-2xl p-4">{props.title}</p>
      )}
      {/* <div style={{ overflowY: "scroll" }}> */}
      {props.children}
      {/* </div> */}
    </div>
  )
}

DashboardBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
}
