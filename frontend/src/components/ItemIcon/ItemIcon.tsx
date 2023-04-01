import {
  faBolt,
  faCar,
  faFlag,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import type { ItemIconProps } from "./types"

const COLOR = "#0084ff"
const ICON_CLASS = "fa-lg"

export function ItemIcon({ prop = "ItemIcon", itemType }: ItemIconProps) {
  let icon
  if (itemType === "area") {
    icon = (
      <FontAwesomeIcon icon={faFlag} color={COLOR} className={ICON_CLASS} />
    )
  } else if (itemType === "user") {
    icon = (
      <FontAwesomeIcon icon={faUser} color={COLOR} className={ICON_CLASS} />
    )
  } else if (itemType === "charger") {
    icon = (
      <FontAwesomeIcon icon={faBolt} color={COLOR} className={ICON_CLASS} />
    )
  } else {
    icon = <FontAwesomeIcon icon={faCar} color={COLOR} className={ICON_CLASS} />
  }
  return (
    <div className="flex content-center justify-center h-full m-2">{icon}</div>
  )
}
