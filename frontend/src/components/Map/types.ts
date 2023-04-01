import { AreaInfo, MapItem } from "~/controllers/definitions"

export type MapProps = {
  prop?: string
  users: MapItem[]
  chargers: MapItem[]
  stations: MapItem[]
  allItems: Record<string, unknown>
  showAreas: boolean
  onAreaSelected: (areaInfo: AreaInfo) => void
}

export type Polygon = {
  [key: string]: JSONValue
}

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue }

export interface JSONObject {
  [k: string]: JSONValue
}
